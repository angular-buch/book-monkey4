import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let bs: BookStoreService;

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

  const expectedBooks: Book[] = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date('2019-01-01T00:00:00.000Z')
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: new Date('2019-01-01T00:00:00.000Z')
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookStoreService]
    });

    // Inject http, test controller and service-under-test to be referenced by each test
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    bs = TestBed.get(BookStoreService);
  });

  afterEach(() => {
    // assert that there are no more pending reuests after every test
    httpMock.verify();
  });

  describe('#getAll', () => {
    const apiUrl = 'https://api4.angular-buch.com/secure/books';

    beforeEach(() => {
      bs = TestBed.get(BookStoreService);
    });

    it('should GET a list of all books', () => {
      bs.getAll().subscribe(
        books => expect(books).toEqual(expectedBooks, 'should return expected books'),
        error => fail('we do not exect a failure here')
      );

      // BookStoreService should have made one request to get Books from expected URL
      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toEqual('GET');

      // respond with the mock
      req.flush(bookRaw);
    });

    it('should be OK to return no books', () => {
      bs.getAll().subscribe(
        books => expect(books.length).toEqual(0, 'should have empty books array'),
        fail
      );

      // BookStoreService should have made one request to get Books from expected URL
      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toEqual('GET');

      // respond with the mock
      req.flush([]);
    });
  });


  describe('#getSingle', () => {
    const apiUrl = `https://api4.angular-buch.com/secure/book`;

    beforeEach(() => {
      bs = TestBed.get(BookStoreService);
    });

    it('should return the matching book reuqested by ID', () => {
      bs.getSingle('111').subscribe(
        book => expect(book).toEqual(expectedBooks[0], 'should return expected books'),
        error => fail('we do not exect a failure here')
      );

      // BookStoreService should have made one request to get Books from expected URL
      const req = httpMock.expectOne(`${apiUrl}/111`);
      expect(req.request.method).toEqual('GET');

      // respond with the mock
      req.flush(expectedBooks[0]);
    });

  });

});
