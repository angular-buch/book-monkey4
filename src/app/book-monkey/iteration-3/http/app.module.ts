import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // NEW

import { AppRoutingModule } from './app-routing.module.one-app';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, // NEW
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
