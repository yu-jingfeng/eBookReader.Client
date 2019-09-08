import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShelfComponent } from './shelf/shelf.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookPanelComponent } from './book-panel/book-panel.component';


@NgModule({
  declarations: [
    ShelfComponent,
    BookshelfComponent,
    CategoryMenuComponent,
    CategoryItemComponent,
    BookItemComponent,
    BookPanelComponent
  ],
  imports: [
    DesktopRoutingModule,
    SharedModule,
  ]
})
export class DesktopModule { }
