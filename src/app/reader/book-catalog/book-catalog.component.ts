import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CatalogNode } from 'src/app/domain/catalog-node.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { CatalogTreeNode } from 'src/app/domain/catalog-tree-node.model';

const TREE_DATA: CatalogNode[] = [
  {
    title: "第一章",
    src: "",
    children: [
      {
        title: "1.1第一节",
        src: "",
        children: [
          {
            title: "1.1.1",
            src: ""
          },
        ],
      },
      {
        title: "1.2",
        src: ""
      },
      {
        title: "1.3",
        src: ""
      },
    ]
  },
  {
    title: "第二章",
    src: "",
    children: [
      {
        title: "2.1",
        src: ""
      },
      {
        title: "2.2",
        src: ""
      },
      {
        title: "2.3",
        src: ""
      },
    ]
  },
  {
    title: "第三章",
    src: "",
    children: [
      {
        title: "3.1",
        src: ""
      },
      {
        title: "3.2",
        src: ""
      },
      {
        title: "3.3",
        src: ""
      },
    ]
  },
  {
    title: "第四章",
    src: "",
    children: [
      {
        title: "4.1",
        src: ""
      },
      {
        title: "4.2",
        src: ""
      },
      {
        title: "4.3",
        src: ""
      },
    ]
  },
]

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit, OnChanges {

  @Input() catalog: CatalogNode[] = [];
  @Output() catalogJump = new EventEmitter<string>();

  private transformer = (node: CatalogNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      level: level,
      title: node.title,
      src: node.src,
    };
  }

  treeControl = new FlatTreeControl<CatalogTreeNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.treeControl.expandAll()
  }

  hasChild = (_: number, node: CatalogTreeNode) => node.expandable;

  ngOnInit() { }

  ngOnChanges(): void {
    this.dataSource.data = this.catalog;
    this.treeControl.expandAll()
  }

  /**
   * 目录项点击事件
   * @param node 目录节点
   */
  itemClick(node: CatalogTreeNode) {
    this.treeControl.expand(node);
    this.catalogJump.emit(node.src)
  }
}
