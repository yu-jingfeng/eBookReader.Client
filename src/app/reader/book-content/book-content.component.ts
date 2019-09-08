import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {

  @Output() contentClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onContentClick() {
    this.contentClick.emit();
  }
}
