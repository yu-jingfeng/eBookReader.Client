import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from 'src/app/domain/book-item.model';
import { BookNode } from 'src/app/domain/book-node.model';
import { CategoryItem } from 'src/app/domain/category-item.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {


  /**
   * 类别节点
   */
  @Input() cateItems: CategoryItem[];

  constructor() { }

  ngOnInit() {
  }

}
