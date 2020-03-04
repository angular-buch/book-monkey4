import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    loadChildren: () => import('src/app/book-monkey/iteration-6/lazy-loading/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/book-monkey/iteration-6/lazy-loading/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
