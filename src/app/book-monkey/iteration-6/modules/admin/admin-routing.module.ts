import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin/create',
    pathMatch: 'full'
  },
  {
    path: 'admin/create',
    component: CreateBookComponent
  },
  {
    path: 'admin/edit/:isbn',
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
