import { Component, OnInit, Input } from '@angular/core';
import { BookNode } from 'src/app/domain/book-node.model';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.css']
})
export class BookPanelComponent implements OnInit {

  @Input() bookNodes: BookNode[];

  constructor() { }

  ngOnInit() {
  }

}
