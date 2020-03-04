import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

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
    loadChildren: () => import('src/app/book-monkey/iteration-7/i18n/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/book-monkey/iteration-7/i18n/admin/admin.module').then(m => m.AdminModule),
    canActivate: [CanNavigateToAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
