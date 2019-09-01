import { Component, OnInit } from '@angular/core';
import { BookItem } from '../domain/book-item.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  bookItems: BookItem[] = [
    {
      id: 1,
      name: "Go Web编程11",
      cover: "http://s3.sinaimg.cn/bmiddle/5c749ed8g6cb09a709932&690"
    },
    {
      id: 2,
      name: "Go Web编程22",
      cover: "http://s3.sinaimg.cn/bmiddle/5c749ed8g6cb09a709932&690"
    },
    {
      id: 3,
      name: "Go Web编程33",
      cover: "http://s3.sinaimg.cn/bmiddle/5c749ed8g6cb09a709932&690"
    },
    {
      id: 4,
      name: "Go Web编程44",
      cover: "http://s3.sinaimg.cn/bmiddle/5c749ed8g6cb09a709932&690"
    },
    {
      id: 5,
      name: "Go Web编程55",
      cover: "http://s3.sinaimg.cn/bmiddle/5c749ed8g6cb09a709932&690"
    },
    {
      id: 6,
      name: "Go Web编程66",
      cover: "http://s3.sinaimg.cn/bmiddle/5c749ed8g6cb09a709932&690"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
