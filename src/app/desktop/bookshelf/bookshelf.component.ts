import { Component, OnInit } from '@angular/core';
import { CategoryNode } from 'src/app/domain/category.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  categoryNodes: CategoryNode[] = [
    {
      name: "技术书籍",
      children: [
        {
          name: "C#/.NET"
        },
        {
          name: "JavaScript"
        },
        {
          name: "Golang"
        },
      ]
    },
    {
      name: "非技术书籍",
      children: [
        {
          name: "哲学"
        },
        {
          name: "小说"
        },
        {
          name: "心理学"
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
