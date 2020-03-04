import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { BookExistsValidatorService } from './book-exists-validator.service';
import { BookStoreService } from '../../shared/book-store.service';
import { FormControl } from '@angular/forms';

describe('BookExistsValidatorService', () => {
  let service: BookExistsValidatorService;

  let bookStoreServiceStub: Partial<BookStoreService>;
  bookStoreServiceStub = {
    check: (isbn: string): Observable<boolean> => {
      return isbn === '1111111111' ? of(true) : of(false);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookExistsValidatorService,
        { provide: BookStoreService, useValue: bookStoreServiceStub }
      ]
    });
    service = TestBed.get(BookExistsValidatorService);
  });

  it('should detect that the ISBN does not exist', () => {
    service.validate(new FormControl('0123456789'))
      .subscribe(res => {
        expect(res).toBeNull();
      });
  });

  it('should detect that the ISBN already exist', () => {
    service.validate(new FormControl('1111111111'))
      .subscribe(res => {
        expect(res).toEqual({ isbnExists: { valid: false } });
      });
  });

});
