import { Component, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { CategoryService } from '../services/category.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  categoryItems: CategoryItem[];

  constructor(
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategorys()
      .subscribe(cateItems => {
        this.categoryItems = cateItems.sort((a, b) => a.order - b.order);
        console.log(this.categoryItems);

      });
  }

}
