import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  ngOnInit() {
    this.books = [
      {
        isbn: '9783864907791',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2020, 6, 1),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices - inklusive RxJS, NgRx & PWA',
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/angular-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Die Autoren führen Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular...'
      },
      {
        isbn: '9783864905520',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2019, 11, 12),
        subtitle: 'Die praktische Einführung in React, React Router und Redux',
        rating: 3,
        thumbnails: [{
          url: 'https://ng-buch.de/react-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Das bewährte und umfassende Praxisbuch zu React...'
      }
    ];
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
