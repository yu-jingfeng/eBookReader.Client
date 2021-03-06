import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book/book.component';
import { ReaderRoutingModule } from './reader-routing.module';
import { BookCatalogComponent } from './book-catalog/book-catalog.component';
import { BookContentComponent } from './book-content/book-content.component';
import { BookReaderService } from './book-reader.service';

@NgModule({
  declarations: [BookComponent, BookCatalogComponent, BookContentComponent],
  imports: [
    ReaderRoutingModule,
    SharedModule,
  ],
  providers: [
    BookReaderService,
  ]
})
export class ReaderModule { }
