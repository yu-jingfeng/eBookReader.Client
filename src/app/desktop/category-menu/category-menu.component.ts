import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { CategoryService } from '../services/category.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  @Input() items: CategoryItem[];
  @ViewChild('cateInput') cateInput: ElementRef;

  creating = false;

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog, ) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousIndex == event.currentIndex) {
      return;
    }
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);
    var orders = this.items.map((item, idx) => {
      return {
        id: item.id,
        order: idx + 1
      }
    })
    this.categoryService.reorder(orders)
      .subscribe(() => {
        console.log('排序成功');
      }, err => {
        moveItemInArray(this.items, event.currentIndex, event.previousIndex);
        this.snackBar.open('排序失败，请重试', '', { duration: 2000 });
      });
  }

  /**
   * 新建类别
   */
  newCategory() {
    this.creating = true;
    setTimeout(() => {
      this.cateInput.nativeElement.focus()
      //console.log();
    }, 0);
  }

  /**
   * 添加新类别
   * @param cate 类别名称
   */
  addCategory(cate: string) {
    if (!this.creating) {
      return;
    }
    cate = cate.trim();
    this.creating = false;
    if (!cate) {
      return;
    }
    console.log(cate);

    this.categoryService.add(cate)
      .subscribe(cateItem => {
        this.items.push(cateItem);
        console.log('添加成功');

      }, err => {
        this.snackBar.open('新建类别失败，请重试', '', { duration: 2000 });
      });

  }

  /**
   * 删除类别(解散)
   * @param id 类别id
   */
  deleteCate(id: number) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { title: '解散分类', content: '确认解散分类？解散分类不会删除书籍。' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.categoryService.delete(id)
        .subscribe(() => {
          console.log('解散成功');
          let idx = this.items.findIndex(c => c.id == id);
          this.items.splice(idx, 1);
        }, err => {
          this.snackBar.open('解散失败，请重试', '', { duration: 2000 });
        });
    });


  }

}
