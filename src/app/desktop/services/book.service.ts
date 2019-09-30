import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BookItem } from 'src/app/domain/book-item.model';

@Injectable()
export class BookService {
  host = 'http://localhost:5000';

  private booksSource = new Subject<BookItem[]>();

  booksUpdate$ = this.booksSource.asObservable();

  constructor(private http: HttpClient) { }

  updateSource() {
    this.getBooks().subscribe(books => {
      this.booksSource.next(books);
    });
  }

  /**
   * 获取用户书籍
   */
  getBooks(): Observable<BookItem[]> {
    let url = `${this.host}/api/Book/UserBooks`;
    return this.http.get<BookItem[]>(url);
  }

  /**
   * 快速上传书籍
   * @param fileInfo 文件详情
   */
  rapidUpload(fileInfo: { hash: string, size: number, categoryId: number }): Observable<BookItem> {
    let url = `${this.host}/api/Book/RapidUpload`;
    return this.http.post<BookItem>(url, fileInfo);
  }

  /**
   * 上传书籍
   * @param formData 书籍文件
   */
  upload(formData: FormData): Observable<BookItem> {
    let url = `${this.host}/api/Book/Upload`;
    return this.http.post<BookItem>(url, formData);
  }

  /**
   * 更新书籍名称
   * @param bookInfo 书籍信息
   */
  updateName(bookInfo: { id: number, name: string }): Observable<void> {
    let url = `${this.host}/api/Book/UpdateName`;
    return this.http.post<void>(url, bookInfo);
  }

  /**
   * 更新书籍类别
   * @param bookInfo 书籍信息
   */
  updateCategory(bookInfo: { id: number, categoryId: number }): Observable<void> {
    let url = `${this.host}/api/Book/UpdateCategory`;
    return this.http.post<void>(url, bookInfo);
  }

  /**
   * 删除书籍
   * @param bookId 书籍id
   */
  delete(bookId: number): Observable<void> {
    let url = `${this.host}/api/Book/Delete?bookId=${bookId}`;
    return this.http.delete<void>(url);
  }
}
