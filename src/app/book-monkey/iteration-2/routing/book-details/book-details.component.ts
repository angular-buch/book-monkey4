import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  // ⚠️ Unterschied zum Buch: Property ist optional, sonst muss es direkt zugewiesen werden.
  book?: Book;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    /** ⚠️ Unterschied zum Buch:
     * Der Typ des Routen-Parameters ist `string | null`. Die Methode `getSingle()` erwartet allerdings `string`.
     * Wir definieren deshalb hier einen leeren String als Fallback-Wert. So wird der Typ in jedem Fall `string`.
     */
    this.book = this.bs.getSingle(params.get('isbn') || '');
  }

  getRating(num: number) {
    return new Array(num);
  }
}
