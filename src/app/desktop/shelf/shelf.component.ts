import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BookItem } from 'src/app/domain/book-item.model';
import { BookNode } from 'src/app/domain/book-node.model';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit, OnChanges {


  /**
   * 类别节点
   */
  @Input() cateItems: CategoryItem[];

  cateMap: { [key: number]: BookItem[] } = {};


  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log(this.cateItems);
  }

  ngOnChanges(): void {
    console.log(this.cateItems);
    if (!this.cateItems || this.cateItems.length == 0) {
      return;
    }

    this.cateItems.map(cate => {
      this.cateMap[cate.id] = []
    })
    this.bookService.getBooks()
      .subscribe(books => {
        books.map(book => {
          this.cateMap[book.categoryId].push(book);
        });
      });
  }

}
