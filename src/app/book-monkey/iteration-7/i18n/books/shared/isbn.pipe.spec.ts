import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {
    pipe = new IsbnPipe(); 
  });

  it('should ignore empty values', () => {
    expect(pipe.transform('')).toBe(null); 
  });

  it('should ignore values of null', () => {
    expect(pipe.transform(null)).toBe(null); 
  });

  it('should format an ISBN with a dash', () => {
    expect(pipe.transform('9783864907791'))
      .toBe('978-3864907791'); 
  });
});
