import { Component, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { CategoryService } from '../services/category.service';
import { BookService } from '../services/book.service';
import { MatSnackBar } from '@angular/material';
import { BookItem } from 'src/app/domain/book-item.model';
import { zip } from 'rxjs';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  categoryItems: CategoryItem[];

  cateMap: { [key: number]: BookItem[] } = {};

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService,
    private snackBar: MatSnackBar, ) { }

  ngOnInit() {

    let cates$ = this.categoryService.getCategorys();
    let books$ = this.bookService.getBooks();

    zip(cates$, books$).subscribe(([cates, books]) => {
      this.categoryItems = cates;
      this.categoryItems.map(cate => {
        this.cateMap[cate.id] = []
      })
      books.map(book => {
        this.cateMap[book.categoryId].push(book);
      });
    })



    this.categoryService.getCategorys()
      .subscribe(cateItems => {
        this.categoryItems = cateItems.sort((a, b) => a.order - b.order);
        console.log(this.categoryItems);

      });
  }

  /**
   * 添加新类别
   * @param name 类别名称
   */
  addCate(name: string) {
    this.categoryService.add(name)
      .subscribe(cateItem => {
        this.categoryItems.push(cateItem);
        this.cateMap[cateItem.id] = [];
        console.log('添加成功');

      }, err => {
        this.snackBar.open('新建类别失败，请重试', '', { duration: 2000 });
      });
  }

  /**
   * 删除类别
   * @param id 类别id
   */
  delCate(id: number) {
    this.categoryService.delete(id)
      .subscribe(() => {
        console.log('解散成功');

        // 从类别数组中删除类别
        let idx = this.categoryItems.findIndex(c => c.id == id);
        this.categoryItems.splice(idx, 1);

        // 将书籍移动到未分类中
        this.cateMap[0].push(...this.cateMap[id])
        delete this.cateMap[id];
      }, err => {
        this.snackBar.open('解散失败，请重试', '', { duration: 2000 });
      });
  }

}
