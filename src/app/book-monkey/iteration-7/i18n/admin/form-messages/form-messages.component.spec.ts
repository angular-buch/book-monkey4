import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormArray, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { FormMessagesComponent } from './form-messages.component';
import { BookValidators } from '../shared/book.validators';

function bookExistsValidatorMock(control: AbstractControl): Observable<ValidationErrors | null> {
   return control.value === '1111111111'
    ? of({isbnExists: { valid: false }})
    : of(null);
}

describe('FormMessagesComponent', () => {
  let component: FormMessagesComponent;
  let fixture: ComponentFixture<FormMessagesComponent>;
  let msgEl: HTMLElement;

  const expectedErrorMessages = {
    title: {
      required: 'Ein Buchtitel muss angegeben werden.'
    },
    isbn: {
      required: 'Es muss eine ISBN angegeben werden.',
      isbnFormat: 'Die ISBN muss aus 10 oder 13 Zeichen bestehen.',
      isbnExists: 'Die ISBN existiert bereits.'
    },
    published: {
      required: 'Es muss ein Erscheinungsdatum angegeben werden.'
    },
    authors: {
      atLeastOneAuthor: 'Es muss ein Autor angegeben werden.'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMessagesComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(FormMessagesComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // store message container
    msgEl = fixture.nativeElement;
  });

  it('should display an error message indicating the title is required', () => {
    const ctrl = new FormControl(null, Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'title';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.title.required);
  });

  it('should not display any error message when controlName is not in messages array', () => {
    const ctrl = new FormControl(null, Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'some wrong control name';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.title.required);
  });

  it('should not display any error message when formControl is valid', () => {
    const ctrl = new FormControl('Valid title', Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'title';
    fixture.detectChanges();
    expect(component.control.valid).toBeTruthy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.title.required);
  });

  it('should not display any error message when formControl is pristine', () => {
    const ctrl = new FormControl('Valid title', Validators.required);
    component.control = ctrl;
    component.controlName = 'title';
    fixture.detectChanges();
    expect(component.control.valid).toBeTruthy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.title.required);
  });

  it('should not display any error formControl is not initialized', () => {
    component.control = null;
    component.controlName = 'title';
    fixture.detectChanges();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.title.required);
  });

  it('should not remove error message after formControl state changes to valid', () => {
    const ctrl = new FormControl(null, Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'title';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.title.required);

    component.control.patchValue('title');
    fixture.detectChanges();
    expect(component.control.valid).toBeTruthy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.title.required);
  });

  it('should display an error message indicating the isbn is required', () => {
    const ctrl = new FormControl(null, Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'isbn';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.isbn.required);
  });

  it('should display an error message indicating the isbn is required', () => {
    const ctrl = new FormControl(null, Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'isbn';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.isbn.required);
  });

  it('should display an error message indicating the isbn format is wrong', () => {
    const ctrl = new FormControl('012345678', BookValidators.isbnFormat);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'isbn';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.isbn.isbnFormat);

    component.control.patchValue('0123456789');
    fixture.detectChanges();
    expect(component.control.valid).toBeTruthy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.isbn.isbnFormat);

    component.control.patchValue('0123456789012');
    fixture.detectChanges();
    expect(component.control.valid).toBeTruthy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.isbn.isbnFormat);
  });

  it('should display an error message indicating the isbn already exists', () => {
    const ctrl = new FormControl('1111111111', Validators.required, bookExistsValidatorMock);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'isbn';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.isbn.isbnExists);
  });

  it('should display an error message indicating the published data field is required', () => {
    const ctrl = new FormControl(null, Validators.required);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'published';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.published.required);
  });

  it('should display an error message when no author has been set', () => {
    const ctrl = new FormArray([], BookValidators.atLeastOneAuthor);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'authors';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.authors.atLeastOneAuthor);
  });

  it('should display an error message when FormControls in Array are all empty', () => {
    const ctrl = new FormArray([ new FormControl(), new FormControl() ], BookValidators.atLeastOneAuthor);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'authors';
    fixture.detectChanges();
    expect(component.control.valid).toBeFalsy();
    expect(msgEl.textContent).toContain(expectedErrorMessages.authors.atLeastOneAuthor);
  });

  it('should display no error message when FormArray contains one FormControl with a non-empty Value', () => {
    const ctrl = new FormArray([ new FormControl(), new FormControl('author2'), new FormControl() ], BookValidators.atLeastOneAuthor);
    ctrl.markAsDirty();
    component.control = ctrl;
    component.controlName = 'authors';
    fixture.detectChanges();
    expect(component.control.valid).toBeTruthy();
    expect(msgEl.textContent).not.toContain(expectedErrorMessages.authors.atLeastOneAuthor);
  });
});
