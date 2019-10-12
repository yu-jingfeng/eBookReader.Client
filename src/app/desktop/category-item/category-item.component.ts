import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { MatMenuTrigger, MatSnackBar } from '@angular/material';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() item: CategoryItem;
  @Output() deleteCate = new EventEmitter<number>();

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('cateInput') cateInput: ElementRef;

  creating = false;
  editing = false;

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar, ) { }
  ngOnInit() {
  }


  openMenu() {
    this.trigger.openMenu();
  }

  closeMenu() {
    this.trigger.closeMenu();
  }


  /**
   * 编辑类别名称
   */
  editCategoryName() {
    this.editing = true;
    setTimeout(() => {
      this.cateInput.nativeElement.focus()
      //console.log();
    }, 0);
  }

  /**
   * 更新类别名称
   */
  updateCategory(name: string) {
    if (!this.editing) {
      return;
    }
    this.editing = false;
    name = name.trim();
    if (!name || name == this.item.name) {
      return;
    }

    this.categoryService.updateName({ id: this.item.id, name: name })
      .subscribe(() => {
        this.item.name = name;
      }, err => {
        //this.editing = false;
        this.snackBar.open('名称修改失败，请重试', '', { duration: 2000 });
      })
  }

  delCategory() {
    console.log(this.item.id);
    this.deleteCate.emit(this.item.id);
  }

}
