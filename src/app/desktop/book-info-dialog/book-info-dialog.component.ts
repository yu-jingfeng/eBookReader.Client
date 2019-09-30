import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookItem } from 'src/app/domain/book-item.model';

@Component({
  selector: 'app-book-info-dialog',
  templateUrl: './book-info-dialog.component.html',
  styleUrls: ['./book-info-dialog.component.css']
})
export class BookInfoDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<BookInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookItem
  ) { }

  ngOnInit() {
  }

}
