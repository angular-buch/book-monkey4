import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module.one-app';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { TokenInterceptor } from './shared/token-interceptor';
import { BookFormComponent } from './book-form/book-form.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormMessagesComponent } from './form-messages/form-messages.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IsbnPipe } from './shared/isbn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    SearchComponent,
    BookFormComponent,
    CreateBookComponent,
    FormMessagesComponent,
    EditBookComponent,
    IsbnPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
