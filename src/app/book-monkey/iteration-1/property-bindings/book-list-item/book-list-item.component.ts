import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  /** ⚠️ Unterschied zum Buch:
   * Property ist optional, sonst muss es direkt zugewiesen werden.
   * Das Input-Property wird allerdings zur Laufzeit der Komponente durch das Property Binding zugewiesen.
   * Da dieses Binding nicht verpflichtend ist, muss das Property auch optional sein.
   * Es sind Anpassungen im Template nötig!
   */
  @Input() book?: Book;

  ngOnInit(): void {
  }
}
