import { Component, OnInit, Input } from '@angular/core';
import { BookNode } from 'src/app/domain/book-node.model';
import { CategoryNode } from 'src/app/domain/category.model';
import { BookItem } from 'src/app/domain/book-item.model';
import { BookService } from '../services/book.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.css']
})
export class BookPanelComponent implements OnInit {

  @Input() cateNode: CategoryNode;

  books: BookItem[] = [];

  constructor(
    private bookService: BookService,
    private utilService: UtilService) { }

  ngOnInit() {
    console.log(this.cateNode.id);

    this.bookService.booksUpdate$.subscribe(books => {
      this.books = books.filter(b => b.categoryId == this.cateNode.id);
    })
  }

  upload(fileInput: HTMLInputElement) {

    var file = fileInput.files[0]

    if (file.type != "application/epub+zip") {
      alert("请上传epub文件");
      return;
    }

    var hash = this.utilService.getMD5HashFromFile(file);
    console.log(hash);


    var formData = new FormData();
    formData.append('BookFile', file);
    formData.append('CategoryId', this.cateNode.id.toString());

    //this.bookService.upload(formData);



    fileInput.value = null;
  }

}
