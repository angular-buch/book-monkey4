import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  // ⚠️ Unterschied zum Buch: Property ist optional, sonst muss es direkt zugewiesen werden.
  book?: Book;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /** ⚠️ Unterschied zum Buch:
     * Der Typ des Routen-Parameters ist `string | null`. Die Methode `getSingle()` erwartet allerdings `string`.
     * Wir definieren deshalb hier einen leeren String als Fallback-Wert. So wird der Typ in jedem Fall `string`.
     * Der Typ des Arguments `isbn` im `switchMap` ist damit auch überflüssig.
     */
    this.route.paramMap.pipe(
      map(params => params.get('isbn') || ''),
      switchMap(isbn => this.bs.getSingle(isbn))
    )
    .subscribe(book => this.book = book);
  }

  updateBook(book: Book) {
    this.bs.update(book).subscribe(() => {
      this.router.navigate(['../../..', 'books', book.isbn], { relativeTo: this.route });
    });
  }

}
