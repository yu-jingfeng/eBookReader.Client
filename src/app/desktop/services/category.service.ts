import { Injectable } from '@angular/core';
import { CategoryItem } from 'src/app/domain/category-item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  host = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  /**
   * 获取书籍类别
   */
  getCategorys(): Observable<CategoryItem[]> {
    let url = `${this.host}/api/Category/Categories`;
    return this.http.get<CategoryItem[]>(url);
  }

  /**
   * 添加类别
   * @param name 类别名称
   */
  add(name: string): Observable<CategoryItem> {
    let url = `${this.host}/api/Category/Add`;
    return this.http.post<CategoryItem>(url, { name });
  }


  /**
   * 修改类别名称
   * @param cate 类别
   */
  updateName(cate: { id: number, name: string }): Observable<void> {
    let url = `${this.host}/api/Category/UpdateName`;
    return this.http.post<void>(url, cate);
  }

  /**
   * 删除类别
   * @param id 类别id
   */
  delete(id: number): Observable<void> {
    let url = `${this.host}/api/Category/Delete?id=${id}`;
    return this.http.delete<void>(url);
  }

  /**
   * 重新排序
   * @param orders 排序信息
   */
  reorder(orders: { id: number, order: number }[]): Observable<void> {
    let url = `${this.host}/api/Category/Reorder`;
    return this.http.post<void>(url, orders)
  }

}
