import { FormControl, FormArray, ValidationErrors } from '@angular/forms';

export class BookValidators {

  static isbnFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }

    const numbers = control.value.replace(/-/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;

    if (isbnPattern.test(numbers)) {
      return null;
    } else {
      return {
        isbnFormat: { valid: false }
      };
    }
  }

  static atLeastOneAuthor(controlArray: FormArray): ValidationErrors | null {
    if (controlArray.controls.some(el => el.value)) {
      return null;
    } else {
      return {
        atLeastOneAuthor: { valid: false }
      };
    }
  }

}
