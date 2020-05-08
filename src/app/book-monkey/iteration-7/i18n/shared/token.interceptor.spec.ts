import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BookStoreService } from './book-store.service';
import { TokenInterceptor } from './token.interceptor';

describe(`TokenInterceptor`, () => {
  let bs: BookStoreService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://api4.angular-buch.com/secure';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookStoreService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    });

    bs = TestBed.inject(BookStoreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should add an Authorization header', () => {
    bs.getAll().subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${apiUrl}/books`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });
});
