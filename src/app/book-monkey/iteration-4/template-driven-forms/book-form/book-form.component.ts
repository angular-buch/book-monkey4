import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book = BookFactory.empty();

  @Output() submitBook = new EventEmitter<Book>();
  /** ⚠️ Unterschied zum Buch:
   * Property ist optional, sonst muss es direkt zugewiesen werden.
   * Property umbenannt, damit es im Template nicht den Namen der Elementreferenz `#bookForm` überschattet.
   */
  @ViewChild('bookForm', { static: true }) form?: NgForm;

  
  submitForm() {
    this.submitBook.emit(this.book);

    this.book = BookFactory.empty();
    // ⚠️ Unterschied zum Buch: Existenzprüfung, denn `this.form` ist optional
    this.form?.reset();
  }

  ngOnInit(): void {
  }
}
