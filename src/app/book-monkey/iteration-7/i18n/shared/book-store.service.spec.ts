import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let httpMock: HttpTestingController;
  let service: BookStoreService;

  const bookRaw: BookRaw[] = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: '2019-01-01T00:00:00.000Z'
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: '2019-01-01T00:00:00.000Z'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookStoreService]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookStoreService);
  });

  it('should GET a list of all books', () => {

    let receivedBooks: Book[];
    service.getAll().subscribe(books => receivedBooks = books); 

    // Request aus der Warteschlange holen
    const req = httpMock.expectOne(
      'https://api4.angular-buch.com/secure/books');
    expect(req.request.method).toEqual('GET'); 

    // flush -- jetzt werden die Bücher emittiert
    req.flush(bookRaw); 

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');

    expect(receivedBooks[0].published).toEqual(new Date('2019-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    // prüfen, ob kein Request übrig geblieben ist
    httpMock.verify(); 
  });
});
