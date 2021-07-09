import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {
    // ⚠️ Unterschied zum Buch: verschoben von ngOnInit in constructor, damit Property nicht optional sein muss
    this.books$ = this.bs.getAll();
  }

  ngOnInit(): void {}
}
