import { Component, OnInit, Input } from '@angular/core';
import { BookNode } from 'src/app/domain/book-node.model';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { BookItem } from 'src/app/domain/book-item.model';
import { BookService } from '../services/book.service';
import { UtilService } from '../services/util.service';
import { pipe, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.css']
})
export class BookPanelComponent implements OnInit {

  @Input() cateItem: CategoryItem;

  @Input() books: BookItem[] = [];

  constructor(
    private bookService: BookService,
    private utilService: UtilService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar, ) { }

  ngOnInit() {
    console.log(this.cateItem.id);

    // this.bookService.booksUpdate$.subscribe(books => {
    //   this.books = books.filter(b => b.categoryId == this.cateItem.id);
    //   console.log(this.books);

    // })
  }

  upload(fileInput: HTMLInputElement) {

    var file = fileInput.files[0]

    if (file.type != "application/epub+zip") {
      alert("请上传epub文件");
      return;
    }

    console.time('md5');
    this.utilService.getMD5HashFromFile(file)
      .pipe(
        mergeMap(hash => {
          console.timeEnd('md5');
          var fileInfo = {
            hash,
            size: file.size,
            categoryId: this.cateItem.id
          }
          return this.bookService.rapidUpload(fileInfo);
        }),
        mergeMap(bookItem => {
          if (bookItem) {
            console.log(`快速上传 ${bookItem.hash}`);
            return of<BookItem>(bookItem);
          }
          var formData = new FormData();
          formData.append('BookFile', file);
          formData.append('CategoryId', this.cateItem.id.toString());

          return this.bookService.upload(formData);
        })
      )
      .subscribe(bookItem => {
        console.log('书籍上传成功');
        console.log(bookItem);
        if (bookItem) {
          this.books.push(bookItem);
        }

      });

    fileInput.value = null;
  }

  deleteBook(bookId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: '删除', content: '是否确认删除书籍？' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.bookService.delete(bookId).subscribe(() => {
          let idx = this.books.findIndex(b => b.id == bookId);
          this.books.splice(idx, 1);
          this.snackBar.open('删除成功', '', { duration: 2000 });
        }, err => {
          console.log(err);
          this.snackBar.open('删除失败', '', { duration: 2000 });
        });
      }
    });
  }
}
