import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShelfComponent } from './shelf/shelf.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookPanelComponent } from './book-panel/book-panel.component';
import { CategoryService } from './services/category.service';
import { BookService } from './services/book.service';
import { UtilService } from './services/util.service';
import { BookInfoDialogComponent } from './book-info-dialog/book-info-dialog.component';


@NgModule({
  declarations: [
    ShelfComponent,
    BookshelfComponent,
    CategoryMenuComponent,
    CategoryItemComponent,
    BookItemComponent,
    BookPanelComponent,
    BookInfoDialogComponent,
  ],
  imports: [
    DesktopRoutingModule,
    SharedModule,
  ],
  providers: [
    CategoryService,
    BookService,
    UtilService,
  ],
  entryComponents: [
    BookInfoDialogComponent,
  ]
})
export class DesktopModule { }
