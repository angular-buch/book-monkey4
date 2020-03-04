import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { SearchComponent } from './search.component';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let bs: BookStoreService;

  const bookDb: Book[] = [
    {
      isbn: '12345',
      title: 'Book 1',
      subtitle: 'Subtitle Book 1',
      authors: ['author1'],
      published: new Date()
    },
    {
      isbn: '67890',
      title: 'Book 2',
      authors: ['author1', 'author2'],
      published: new Date(2015, 1, 1)
    }
  ];

  let bookStoreServiceStub: Partial<BookStoreService>;
  bookStoreServiceStub = {
    getAllSearch: (searchTerm: string): Observable<Book[]> => {
      return of(
        bookDb.filter(item =>
          Object.keys(item).some(k => item[k] != null && item[k].toString().includes(searchTerm))
        )
      );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: BookStoreService, useValue: bookStoreServiceStub }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bs = TestBed.get(BookStoreService);
  });

  it('should return objects containing the given search term', fakeAsync(() => {
    fixture.detectChanges();
    component.keyUp$.next('Book');
    expect(component.foundBooks).toEqual([]);
    expect(component.isLoading).toBeFalsy();
    tick(500);
    expect(component.foundBooks).toEqual([bookDb[0], bookDb[1]]);
    expect(component.isLoading).toBeFalsy();
  }));

  it('should not return anything when entering less then three characters', fakeAsync(() => {
    fixture.detectChanges();
    component.keyUp$.next('12');
    expect(component.foundBooks).toEqual([]);
    expect(component.isLoading).toBeFalsy();
    tick(500);
    expect(component.foundBooks).toEqual([]);
    expect(component.isLoading).toBeFalsy();
  }));
});
