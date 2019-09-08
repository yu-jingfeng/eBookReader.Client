import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  isReading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onContentClick() {
    this.isReading = !this.isReading;
    console.log(this.isReading);

  }
}
