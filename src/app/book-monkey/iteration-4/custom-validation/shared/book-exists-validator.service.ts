import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BookStoreService } from './book-store.service';

@Injectable({
  providedIn: 'root'
})
export class BookExistsValidatorService implements AsyncValidator {

  constructor(private bs: BookStoreService) { }

  // ⚠️ Unterschied zum Buch: Der Argumenttyp ist jetzt `AbstractControl`.
  // Wenn nicht, entspricht diese Funktion nicht korrekt dem Typ `VaildatorFn`.
  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.bs.check(control.value).pipe(
      map(exists => (exists === false) ? null : {
          isbnExists: { valid: false }
      }),
      catchError(() => of(null))
    );
  }
}
