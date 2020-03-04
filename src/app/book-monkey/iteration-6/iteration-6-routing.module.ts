import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration6Component } from './iteration-6.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration6Component,
    children: [
      { path: '', redirectTo: 'modules', pathMatch: 'full' },
      { path: 'modules', loadChildren: () => import('src/app/book-monkey/iteration-6/modules/app.module').then(m => m.AppModule) },
      { path: 'lazy-loading', loadChildren: () => import('src/app/book-monkey/iteration-6/lazy-loading/app.module').then(m => m.AppModule) },
      { path: 'guards', loadChildren: () => import('src/app/book-monkey/iteration-6/guards/app.module').then(m => m.AppModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration6RoutingModule { }
