import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookshelfComponent } from './bookshelf/bookshelf.component';


const routes: Routes = [
    { path: 'desktop', component: BookshelfComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DesktopRoutingModule { }
