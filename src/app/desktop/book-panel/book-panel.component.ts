import { Component, OnInit, Input } from '@angular/core';
import { BookNode } from 'src/app/domain/book-node.model';
import { CategoryNode } from 'src/app/domain/category.model';
import { BookItem } from 'src/app/domain/book-item.model';
import { BookService } from '../services/book.service';
import { UtilService } from '../services/util.service';
import { pipe, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.css']
})
export class BookPanelComponent implements OnInit {

  @Input() cateNode: CategoryNode;

  books: BookItem[] = [];

  constructor(
    private bookService: BookService,
    private utilService: UtilService) { }

  ngOnInit() {
    console.log(this.cateNode.id);

    this.bookService.booksUpdate$.subscribe(books => {
      this.books = books.filter(b => b.categoryId == this.cateNode.id);
    })
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
            categoryId: this.cateNode.id
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
          formData.append('CategoryId', this.cateNode.id.toString());

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

}
