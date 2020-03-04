import { Book } from './book';
import { BookRaw } from './book-raw';

export class BookFactory {
  static fromRaw(b: BookRaw): Book {
    return {
      ...b,
      published: new Date(b.published)
    };
  }
}
