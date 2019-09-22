import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CatalogNode } from '../domain/catalog-node.model';

@Injectable()
export class BookService {

  host = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  /**
   * 获取书籍目录
   * @param bookHash 书籍MD5值
   */
  getCatalog(bookHash: string): Observable<CatalogNode[]> {
    let url = `${this.host}/books/${bookHash}/catalog.json`;
    return this.http.get<CatalogNode[]>(url);
  }

  /**
   * 获取页面内容
   * @param bookHash 书籍MD5值
   * @param pageName 页名称
   */
  getContent(bookHash: string, pageName: string): Observable<string> {
    let url = `${this.host}/books/${bookHash}/text/${pageName}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(content => {
        // <img alt="01-01" src="/books/f3852784/images/Image00002.jpg">
        //content.replace(/(<img.*src=")(.*?)(".*?>)/, `$1${this.host}$2$3`)
        var div = document.createElement('div');
        div.innerHTML = content;
        var imgs = div.querySelectorAll("img");
        imgs.forEach(img => {
          img.src = this.host + img.getAttribute("src");
        })

        return div.innerHTML;
      })
    );
  }
}
