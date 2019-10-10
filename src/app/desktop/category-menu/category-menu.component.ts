import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CategoryNode } from 'src/app/domain/category.model';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  @Input() nodes: CategoryNode[];
  @ViewChild('cateInput') cateInput: ElementRef;

  newCate = false;

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar, ) { }

  ngOnInit() {
  }

  /**
   * 新建类别
   */
  newCategory() {
    this.newCate = true;
    setTimeout(() => {
      this.cateInput.nativeElement.focus()
      //console.log();
    }, 0);
  }

  /**
   * 添加新类别
   * @param cate 类别名称
   * @param pId 父类别id
   */
  addCategory(cate: string, pId: number = 0) {
    if (!this.newCate) {
      return;
    }
    this.newCate = false;
    console.log(cate);
    this.cateInput.nativeElement.disabled = true;

    this.categoryService.add({ name: cate, parentId: pId })
      .subscribe(cateNode => {
        this.newCate = false;
        this.nodes.push(cateNode);
        console.log('添加成功');

      }, err => {
        this.snackBar.open('新建类别失败，请重试', '', { duration: 2000 });
      });

  }

}
