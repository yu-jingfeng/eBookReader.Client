import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogNode } from 'src/app/domain/catalog-node.model';
import { NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

const TREE_DATA: CatalogNode[] = [
  {
    title: "第一章",
    url: "",
    children: [
      {
        title: "1.1第一节",
        url: "",
        children: [
          {
            title: "1.1.1",
            url: ""
          },
        ],
      },
      {
        title: "1.2",
        url: ""
      },
      {
        title: "1.3",
        url: ""
      },
    ]
  },
  {
    title: "第二章",
    url: "",
    children: [
      {
        title: "2.1",
        url: ""
      },
      {
        title: "2.2",
        url: ""
      },
      {
        title: "2.3",
        url: ""
      },
    ]
  },
  {
    title: "第三章",
    url: "",
    children: [
      {
        title: "3.1",
        url: ""
      },
      {
        title: "3.2",
        url: ""
      },
      {
        title: "3.3",
        url: ""
      },
    ]
  },
  {
    title: "第四章",
    url: "",
    children: [
      {
        title: "4.1",
        url: ""
      },
      {
        title: "4.2",
        url: ""
      },
      {
        title: "4.3",
        url: ""
      },
    ]
  },
]

interface CatalogFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  private transformer = (node: CatalogNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.title,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<CatalogFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor() {

    this.dataSource.data = TREE_DATA;
    this.treeControl.expandAll()
  }

  hasChild = (_: number, node: CatalogFlatNode) => node.expandable;

  ngOnInit() {

  }


}
