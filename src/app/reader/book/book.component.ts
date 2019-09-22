import { Component, OnInit } from '@angular/core';
import { CatalogNode } from 'src/app/domain/catalog-node.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  isReading: boolean = false;

  bookHash: string = '';

  pageName = '';

  /**
   * 书籍目录
   */
  catalog: CatalogNode[] = [];

  /**
   * 当前内容
   */
  content: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookHash = params.get('hash');
      this.bookService.getCatalog(this.bookHash)
        .subscribe(catalog => {
          console.log("目录已加载");
          this.catalog = catalog;
          // 加载第一页
          this.catalogJump(catalog[0].src);
        })
    })
  }

  /**
   * 内容点击事件
   */
  contentClick() {
    this.isReading = !this.isReading;
    console.log(this.isReading);

  }

  /**
   * 目录跳转
   * @param src 页面名称
   */
  catalogJump(src: string) {
    console.log(src);

    var srcArray = src.split('#')
    var name = srcArray[0];
    var hash = srcArray[1];

    if (this.pageName == name) {
      this.jumpToPositionById(hash);
      return;
    }
    this.pageName = name;
    this.bookService.getContent(this.bookHash, src)
      .subscribe(content => {
        this.content = this.sanitizer.bypassSecurityTrustHtml(content);
        setTimeout(() => {
          var dom = document.querySelector('#' + hash);
          console.log(dom);
          this.jumpToPositionById(hash);
        }, 0);


      })
  }

  /**
   * 根据id跳转到指定位置
   * @param id 元素id
   */
  jumpToPositionById(id: string) {
    if (!id) {
      return;
    }
    let offsetTop = document.getElementById(id).offsetTop;
    let marginTop = this.getElementMarginTop('app-book-content');

    let top = offsetTop + marginTop - 100;
    document.querySelector('mat-sidenav-content').scrollTo(0, top);
  }

  /**
   * 获取元素的margin-top值
   * @param selector 选择器
   */
  getElementMarginTop(selector: string): number {
    var elem = document.querySelector(selector);

    let marginTop = '';

    if ((<any>elem).currentStyle) {
      marginTop = (<any>elem).currentStyle;
    } else {
      marginTop = document.defaultView.getComputedStyle(elem, null).marginTop;
    }

    return parseInt(marginTop);
  }
}
