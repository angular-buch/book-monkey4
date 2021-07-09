import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  /** ⚠️ Unterschied zum Buch:
   * Property mit leerem Array initialisieren. Dadurch, dass die endgültige Zuweisung der Buchliste
   * erst im ngOnInit() passiert, ist `books` aus Sicht der Klasse nicht immer mit einem Wert belegt.
   * Das kann durch eine direkte Zuweisung umgangen werden.
   * Prinzipiell reicht an dieser Stelle auch die Zuweisung der Liste im constructor.
   * In späteren Iterationen im Zusammenhang mit HTTP werden wir den Standardwert hier aber noch benötigen.
   */ 
  books: Book[] = [];

  ngOnInit(): void {
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
}
