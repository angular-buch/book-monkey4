import { FormArray, ValidationErrors, AbstractControl } from '@angular/forms';

export class BookValidators {

  static isbnFormat(control: AbstractControl): ValidationErrors | null {
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

  static atLeastOneAuthor(controlArray: AbstractControl): ValidationErrors | null {
    if ((controlArray as FormArray).controls.some((el: AbstractControl) => el.value)) {
      return null;
    } else {
      return {
        atLeastOneAuthor: { valid: false }
      };
    }
  }

}
