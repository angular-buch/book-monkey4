import { Component } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';

import { BookDetailsComponent } from './book-details.component';
import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';
import { IsbnPipe } from '../shared/isbn.pipe';
import { DelayDirective } from '../shared/delay.directive';

const expectedBook = {
  isbn: '111',
  title: 'Book 1',
  authors: [],
  published: new Date(),
  rating: 4
};

@Component({ template: '<router-outlet></router-outlet>' })
class TestOutletComponent { }

class BookStoreServiceMock {
  getSingle(isbn: string): Observable<Book | null> {
    return of(isbn === expectedBook.isbn ? expectedBook : null);
  }
  remove(isbn: string): Observable<any> {
    return of();
  }
}

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let nativeEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestOutletComponent,
        BookDetailsComponent,
        IsbnPipe,
        DelayDirective
      ],
      providers: [
        {
          provide: BookStoreService,
          useClass: BookStoreServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: { get: () => '111' }
            }
          }
        }
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: ':isbn', component: BookDetailsComponent }
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should fetch a single book', () => {
    expect(component.book).toBeTruthy();
  });

  it('should show 4 stars', async ()  => {
    await fixture.whenStable(); // because of DelayDirective
    const ratingEl = nativeEl.querySelectorAll('i.star');
    expect(ratingEl.length).toBe(4);
  });

  it('should remove a book and navigate back', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    fixture.nativeElement.querySelector('button').click();
    // TODO: check if remove book has been called and check routing
    expect(true).toBeTruthy();
  });

  it('should redirect to edit page', () => {
    fixture.nativeElement.querySelector('a').click();
    // TODO: check routing
    expect(true).toBeTruthy();
  });
});
