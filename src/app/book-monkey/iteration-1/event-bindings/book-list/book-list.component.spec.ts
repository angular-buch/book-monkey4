import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

describe('BookListComponent', () => {

  let component: BookListComponent;

  beforeEach(() => {
    component = new BookListComponent();
  });

  it('should hold a hardcoded list of 2 books', () => {
    component.ngOnInit(); // manueller Aufruf!
    expect(component.books.length).toBe(2);
  });

  it('should trigger an event on "showDetails"', () => {

    const sendBook = {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      published: new Date()
    };
    let receivedBook: Book;

    component.showDetailsEvent
      .subscribe((book) => receivedBook = book);
    component.showDetails(sendBook);

    expect(sendBook).toBe(receivedBook);
  });
});
