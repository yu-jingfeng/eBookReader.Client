import { Component, OnInit } from '@angular/core';
import { CategoryNode } from 'src/app/domain/category.model';
import { CategoryService } from '../services/category.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  categoryNodes: CategoryNode[];

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService) { }

  ngOnInit() {
    this.categoryService.getCategorys()
      .subscribe(cate => {
        this.categoryNodes = cate;
      });

    this.bookService.updateSource();
  }

}
