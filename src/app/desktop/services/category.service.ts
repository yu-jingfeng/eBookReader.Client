import { Injectable } from '@angular/core';
import { CategoryNode } from 'src/app/domain/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  host = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  /**
   * 获取书籍类别
   */
  getCategorys(): Observable<CategoryNode[]> {
    let url = `${this.host}/api/Category/Categories`;
    return this.http.get<CategoryNode[]>(url);
  }

  /**
   * 添加类别
   * @param cate 类别
   */
  add(cate: { name: string, parentId: number }): void {
    let url = `${this.host}/api/Category/Add`;
    this.http.post(url, cate);
  }


  /**
   * 修改类别名称
   * @param cate 类别
   */
  updateName(cate: { id: number, name: string }): void {
    let url = `${this.host}/api/Category/UpdateName`;
    this.http.post(url, cate);
  }

  /**
   * 删除类别
   * @param id 类别id
   */
  delete(id: number): void {
    let url = `${this.host}/api/Category/Delete?${id}`;
    this.http.delete(url);
  }


}
