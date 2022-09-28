import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';

import { Book, Thumbnail } from '../shared/book';
import { BookValidators } from '../shared/book-validators';
import { BookExistsValidatorService } from '../shared/book-exists-validator.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnChanges {

  bookForm: FormGroup;

  @Input() book?: Book;
  @Input() set editing(isEditing: boolean) {
    const isbnControl = this.bookForm.get('isbn')!;
    if (isEditing) {
      isbnControl.clearAsyncValidators();
      isbnControl.disable();
    } else {
      isbnControl.setAsyncValidators(control => this.bookExistsValidator.validate(control));
      isbnControl.enable();
    }
  };
  @Output() submitBook = new EventEmitter<Book>();

  constructor(
    private fb: FormBuilder,
    private bookExistsValidator: BookExistsValidatorService
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      isbn: ['',
        [
          Validators.required,
          BookValidators.isbnFormat
        ],
        (control: AbstractControl) => this.bookExistsValidator.validate(control)
      ],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      thumbnails: this.buildThumbnailsArray([
        { title: '', url: '' }
      ]),
      published: [new Date(), [Validators.required]]
    });
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.book) {
      this.setFormValues(this.book);
    }
  }

  private setFormValues(book: Book) {
    this.bookForm.patchValue(book);

    this.bookForm.setControl(
      'authors',
      this.buildAuthorsArray(book.authors)
    );

    if (book.thumbnails) {
      this.bookForm.setControl(
        'thumbnails',
        this.buildThumbnailsArray(book.thumbnails)
      );
    };
  }

  private buildAuthorsArray(values: string[]): FormArray {
    return this.fb.array(values, BookValidators.atLeastOneAuthor);
  }

  private buildThumbnailsArray(values: Thumbnail[]): FormArray {
    return this.fb.array(
      values.map(t => this.fb.group(t))
    );
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  get thumbnails(): FormArray {
    return this.bookForm.get('thumbnails') as FormArray;
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl() {
    this.thumbnails.push(
      this.fb.group({ url: '', title: '' })
    );
  }

  submitForm() {
    const formValue = this.bookForm.value;
    const authors = formValue.authors
              .filter((author: string) => author);
    const thumbnails = formValue.thumbnails
              .filter((thumbnail: Thumbnail) => thumbnail.url);

    const isbn = this.book ? this.book.isbn : formValue.isbn;

    const newBook: Book = {
      ...formValue,
      isbn,
      authors,
      thumbnails
    };

    this.submitBook.emit(newBook);
    this.bookForm.reset();
  }
}
