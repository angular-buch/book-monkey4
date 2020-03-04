import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  const expectedBooks = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: new Date()
    }
  ];

  let httpMock;

  beforeEach(() => {

    httpMock = {
      get: () => of(expectedBooks)
    };

    spyOn(httpMock, 'get').and.callThrough();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpMock
        },
        BookStoreService
      ]
    });
  });

  it('should GET a list of all books',
    inject([BookStoreService], (service: BookStoreService) => {

      let receivedBooks: Book[];
      service.getAll().subscribe(b => receivedBooks = b);

      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].isbn).toBe('111');
      expect(receivedBooks[1].isbn).toBe('222');

      // NEU
      expect(httpMock.get).toHaveBeenCalledTimes(1);
      expect(httpMock.get).toHaveBeenCalledWith('https://api4.angular-buch.com/books');
    }));
});
