import { Injectable } from '@angular/core';
import { FormControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BookStoreService } from './book-store.service';

@Injectable({
  providedIn: 'root'
})
export class BookExistsValidatorService implements AsyncValidator {

  constructor(private bs: BookStoreService) { }

  validate(
    control: FormControl
  ): Observable<ValidationErrors | null> {
    return this.bs.check(control.value).pipe(
      map(exists => (exists === false) ? null : {
          isbnExists: { valid: false }
      }),
      catchError(() => of(null))
    );
  }
}
