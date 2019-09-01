import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CategoryNode } from '../domain/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit, OnChanges {

  @Input() level = 1;
  @Input() node: CategoryNode;

  @Input() isParentExpanded = true;

  @Input() selectedNodes: CategoryNode[];

  isExpanded = false;
  isSelected = false;
  classes: { [index: string]: boolean };

  nodeChildren: CategoryNode[];

  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.nodeChildren = this.node && this.node.children ?
      this.node.children : [];

    if (this.selectedNodes) {
      const ix = this.selectedNodes.indexOf(this.node);
      this.isSelected = ix !== -1; // this node is the selected node or its ancestor
      this.isExpanded = this.isParentExpanded &&
        (this.isSelected || // expand if selected or ...
          // preserve expanded state when display is wide; collapse in mobile.
          (this.isExpanded));
    } else {
      this.isSelected = false;
    }

    this.setClasses();
  }

  setClasses() {
    this.classes = {
      ['level-' + this.level]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected
    };
  }

  headerClicked() {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }

}
