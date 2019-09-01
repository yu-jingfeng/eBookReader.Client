import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShelfComponent } from './shelf/shelf.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { BookItemComponent } from './book-item/book-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ShelfComponent,
    BookshelfComponent,
    CategoryMenuComponent,
    CategoryItemComponent,
    BookItemComponent
  ],
  imports: [
    DesktopRoutingModule,
    SharedModule,
  ]
})
export class DesktopModule { }
