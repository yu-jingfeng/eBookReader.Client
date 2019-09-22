import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import * as hljs from "highlight.js";

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    // setTimeout(() => {
    //   document.querySelectorAll('pre code').forEach((block) => {
    //     hljs.highlightBlock(block);
    //   });
    //   console.log("设置高亮");
    //   // hljs.initHighlighting();
    // }, 0);

  }

  @Input() content = '';
  @Output() contentClick = new EventEmitter<void>();

  con = '<p id="pid" class="cla" data-id="did">book-content works!</p>';
  constructor() { }

  ngOnInit() {
  }

  onContentClick() {
    this.contentClick.emit();
  }
}
