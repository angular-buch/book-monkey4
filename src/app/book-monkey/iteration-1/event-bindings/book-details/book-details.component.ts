import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  /** ⚠️ Unterschied zum Buch:
   * Property ist optional, sonst muss es direkt zugewiesen werden.
   * Das Input-Property wird allerdings zur Laufzeit der Komponente durch das Property Binding zugewiesen.
   * Da dieses Binding nicht verpflichtend ist, muss das Property auch optional sein.
   */
  @Input() book?: Book;
  @Output() showListEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }
}
