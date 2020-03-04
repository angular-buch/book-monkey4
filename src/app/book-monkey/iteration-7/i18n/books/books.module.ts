import { DelayDirective } from './shared/delay.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { IsbnPipe } from './shared/isbn.pipe';
import { ZoomDirective } from './shared/zoom.directive';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ]
})
export class BooksModule { }
