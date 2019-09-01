import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/desktop', pathMatch: 'full' },
  { path: 'desktop', redirectTo: '/desktop', pathMatch: 'full' },
  { path: 'reader', redirectTo: '/reader', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
