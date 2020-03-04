import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit/:isbn',
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
