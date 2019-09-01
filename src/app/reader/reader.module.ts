import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book/book.component';
import { ReaderRoutingModule } from './reader-routing.module';

@NgModule({
  declarations: [BookComponent],
  imports: [
    ReaderRoutingModule,
    SharedModule,
  ]
})
export class ReaderModule { }
