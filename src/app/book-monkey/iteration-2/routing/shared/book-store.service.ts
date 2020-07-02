import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      {
        isbn: '9783864907791',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices',
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/angular-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Lernen Sie Angular mit diesem Praxisbuch!'
      },
      {
        isbn: '9783864905520',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2019, 11, 12),
        subtitle: 'Grundlagen, fortgeschrittene Techniken und Praxistipps',
        rating: 3,
        thumbnails: [{
          url: 'https://ng-buch.de/react-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Das bewährte und umfassende Praxisbuch zu React.'
      }
    ];
  }

  getAll(): Book[] {
    return this.books;
  }

  getSingle(isbn: string): Book {
    return this.books.find(book => book.isbn === isbn);
  }
}
