import { Book } from './book';
import { BookRaw } from './book-raw';

export class BookFactory {

  static empty(): Book {
    return {
      isbn: '',
      title: '',
      authors: [''],
      published: new Date(),
      subtitle: '',
      rating: 0,
      thumbnails: [
        { url: '', title: '' }
      ],
      description: ''
    };
  }

  static fromRaw(b: BookRaw): Book {
    return {
      ...b,
      published: new Date(b.published)
    };
  }
}
