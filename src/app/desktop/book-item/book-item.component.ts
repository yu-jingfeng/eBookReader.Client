import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../domain/book-item.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: BookItem;
  constructor() { }

  ngOnInit() {
  }

}
