import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {
    pipe = new IsbnPipe(); 
  });

  it('should ignore empty values values', () => {
    expect(pipe.transform('')).toBe(null); 
  });

  it('should ignore values of null', () => {
    expect(pipe.transform(null)).toBe(null); 
  });

  it('should format an ISBN with a dash', () => {
    expect(pipe.transform('9783864903571'))
      .toBe('978-3864903571'); 
  });
});
