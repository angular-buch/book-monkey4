import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BookListComponent } from './book-list.component';
import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';

@Component({ template: '' })
class TestDetailsComponent { }

@Component({
  selector: 'bm-book-list-item',
  template: ''
})
class TestBookListItemComponent {
  @Input() book: Book;
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let location: Location;

  const expectedBooks = [
    {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    },
    {
      isbn: '222',
      title: 'Book 2',
      authors: [],
      published: new Date()
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        TestBookListItemComponent,
        TestDetailsComponent
      ],
      providers: [{
        provide: BookStoreService,
        useValue: { getAll: () => of(expectedBooks) }
      }],
      imports: [
        RouterTestingModule.withRoutes([
          { path: ':isbn', component: TestDetailsComponent }
        ])
      ]
    });
  }));

  beforeEach(async(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should display books', () => {

    let receivedBooks: Book[];
    component.books$.subscribe(books => receivedBooks = books);

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');
  });

  it('should navigate to details page by ISBN', async(() => {

    fixture.nativeElement
      .querySelector('bm-book-list-item').click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/111');
    });
  }));
});
