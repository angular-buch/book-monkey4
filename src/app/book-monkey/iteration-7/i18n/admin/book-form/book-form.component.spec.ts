import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { BookFormComponent } from './book-form.component';
import { Book } from '../../shared/book';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;
  let submitEl: DebugElement;

  const expectedBook: Book = {
    isbn: '1234567890',
    title: 'Test',
    authors: ['Author 1'],
    published: new Date(100000000000),
    subtitle: 'something',
    thumbnails: [{
      title: 'my title',
      url: 'https://via.placeholder.com/150'
    }],
    description: 'lorem ipsum dolor sit amet...'
  };

  const emptyBookData: Book = {
    isbn: '',
    title: '',
    authors: [''],
    published: null,
    subtitle: '',
    thumbnails: [{
      title: '',
      url: ''
    }],
    description: ''
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('button[type=submit]'));
  });

  it('should initialize the form', () => {
    expect(component.bookForm.value).toEqual(emptyBookData);
    expect(component.bookForm.valid).toBeFalsy();
  });

  it('should display a book to edit', () => {
    component.book = expectedBook;
    component.ngOnChanges();
    expect(component.bookForm.value).toEqual(expectedBook);
    expect(component.bookForm.errors).toBeNull();
  });

  it('should add an author input field', () => {
    component.addAuthorControl();
    expect(component.bookForm.value).toEqual({
      ...emptyBookData,
      authors: ['', '']
    });
  });

  it('should add a Thumbnail FormGroup', () => {
    component.addThumbnailControl();
    expect(component.bookForm.value).toEqual({
      ...emptyBookData,
      thumbnails: [{
        title: '',
        url: ''
      }, {
        title: '',
        url: ''
      }]
    });
  });

  it('should emit the FormData', () => {
    // spy on submit event
    spyOn(component.submitBook, 'emit');

    // check if empty elements will be filtered out
    component.book = {
      ...expectedBook,
      authors: [ ...expectedBook.authors, '', null ],
      thumbnails: [ ...expectedBook.thumbnails,
        { url: '', title: 'should be filtered out' },
        { url: '', title: null },
        { url: null, title: '' }
      ]
    };
    component.ngOnChanges();
    component.submitForm();

    // check emitted event data, expect filtered data
    expect(component.submitBook.emit).toHaveBeenCalledWith(expectedBook);

    // check if form has been resetted
    expect(component.bookForm.value).toEqual({
      isbn: null,
      title: null,
      authors: [ null, null, null ],
      published: null,
      subtitle: null,
      thumbnails: [
        { url: null, title: null },
        { url: null, title: null },
        { url: null, title: null },
        { url: null, title: null }
      ],
      description: null
    });
  });
});
