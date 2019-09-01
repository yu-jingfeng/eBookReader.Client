import { Component, OnInit, Input } from '@angular/core';
import { CategoryNode } from '../domain/category.model';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  @Input() nodes: CategoryNode[];

  constructor() { }

  ngOnInit() {
  }

}
