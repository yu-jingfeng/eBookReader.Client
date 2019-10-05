import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BookItem } from 'src/app/domain/book-item.model';
import { MatMenuTrigger, MatSnackBar, MatDialog } from '@angular/material';
import { BookService } from '../services/book.service';
import { BookInfoDialogComponent } from '../book-info-dialog/book-info-dialog.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  host = "http://localhost:5000"
  @Input() book: BookItem;
  @Output() deleteBook = new EventEmitter<number>();
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('titleInput') titleInput: ElementRef;

  editing = false;

  constructor(
    private bookService: BookService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog, ) { }

  ngOnInit() {
  }

  openMenu() {
    this.trigger.openMenu();
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

  editName() {
    this.editing = true;
    setTimeout(() => {
      this.titleInput.nativeElement.focus()
      //console.log();
    }, 0);
  }

  /**
   * 更新书籍名称
   * @param name 书籍名称
   */
  updateName(name: string) {
    if (!this.editing) {
      return;
    }
    this.editing = false;
    this.titleInput.nativeElement.disabled = true;
    name = name.trim();
    //console.log(this.book);
    let bookInfo = { id: this.book.id, name };
    this.bookService.updateName(bookInfo)
      .subscribe(() => {
        //this.editing = false;
        this.book.name = name;
      }, err => {
        //this.editing = false;
        this.snackBar.open('名称修改失败，请重试', '', { duration: 2000 });
      });
  }

  openInfoDialog() {
    const dialogRef = this.dialog.open(BookInfoDialogComponent, {
      width: '400px',
      data: this.book
    });

  }

  delBook() {
    this.deleteBook.emit(this.book.id)
  }


}
