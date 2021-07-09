import { Component } from '@angular/core';

import { Book } from './shared/book';

type ViewState = 'list' | 'details';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** ⚠️ Unterschied zum Buch:
   * Das Property wurde mit dem Fragezeichen als optional gekennzeichnet.
   * Tun wir das nicht, muss das Property immer sofort zugewiesen werden – direkt oder im Konstruktor.
   */
  book?: Book;
  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(book: Book) {
    this.book = book;
    this.viewState = 'details';
  }
}
