import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookListComponent } from './book-list.component';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { Book } from '../shared/book';

// import { AppModule } from '../app.module';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BookListComponent, BookListItemComponent],

        // also possible, importing the complete module
        // imports: [AppModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit the showDetailsEvent on click', () => {

    let receivedBook: Book;
    component.showDetailsEvent.subscribe((book) => receivedBook = book);

    fixture.nativeElement.querySelector('bm-book-list-item').click();

    // alternative Syntax für den Klick:
    // fixture.debugElement.query(By.css('bm-book-list-item')).nativeElement.click();

    expect(receivedBook.title).toBe('Angular');
  });

  it('should emit the showDetailsEvent when clicking the thumbnail', () => {

    let receivedBook: Book;
    component.showDetailsEvent.subscribe((book) => receivedBook = book);

    fixture.nativeElement.querySelector('img').click();
    expect(receivedBook.title).toBe('Angular');
  });
});
