import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Book, Thumbnail } from '../shared/book';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnChanges {

  bookForm: FormGroup;

  // ⚠️ Unterschied zum Buch: Property ist optional, sonst muss es direkt zugewiesen werden.
  @Input() book?: Book;
  @Input() editing = false;
  @Output() submitBook = new EventEmitter<Book>();

  constructor(private fb: FormBuilder) {
    /** ⚠️ Unterschied zum Buch:
     * Initialisierung erfolgt direkt im Konstruktor.
     * So ist `this.bookForm` kein optionales Property.
     * Außerdem entfällt die "doppelte" Initialisierung
     * im ngOnInit bzw. ngOnChanges. Sobald die Lifecycle-Hooks
     * ausgeführt werden, ist die FormGroup bereits instanziiert.
     */
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      isbn: [{ value: '', disabled: this.editing }, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      thumbnails: this.buildThumbnailsArray([
        { title: '', url: '' }
      ]),
      published: []
    });
  }

  ngOnInit(): void {
    // ⚠️ Unterschied zum Buch: verschoben in constructor
    // this.initForm();
  }

  ngOnChanges() {
    // ⚠️ Unterschied zum Buch: verschoben in constructor
    // this.initForm();

    // ⚠️ Unterschied zum Buch: Existenzprüfung, weil `this.book` optional ist
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

    // ⚠️ Unterschied zum Buch: Existenzprüfung, weil `book.thumbnails` optional ist
    if (book.thumbnails) {
      this.bookForm.setControl(
        'thumbnails',
        this.buildThumbnailsArray(book.thumbnails)
      );
    };
  }

  // ⚠️ Unterschied zum Buch: verschoben in constructor
  // private initForm() {}

  private buildAuthorsArray(values: string[]): FormArray {
    return this.fb.array(values, Validators.required);
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
    /** ⚠️ Unterschied zum Buch:
     * `formValue.authors` und `formValue.thumbnails` hat Typ `any`.
     * Deshalb haben wir den Typ im Argument der Filterfunktion explizit angegeben.
     */
    const authors = formValue.authors
              .filter((author: string) => author);
    const thumbnails = formValue.thumbnails
              .filter((thumbnail: Thumbnail) => thumbnail.url);

    // ⚠️ Unterschied zum Buch: Existenzprüfung auf `this.book`, weil optionales Property
    const isbn = this.editing && this.book ? this.book.isbn : formValue.isbn;

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
