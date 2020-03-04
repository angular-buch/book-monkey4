// this is just a little test for TestBed.get()
// this is not a real part of the BookMonkey, you can ignore this file

import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('TestBed.get()', () => {

  let errorHandler: ErrorHandler; 
  beforeEach(() => {
    errorHandler = TestBed.get(ErrorHandler); 
  });

  it('should also retrieve dependencies', () => {

    errorHandler.handleError(
      new Error('Es ist ein Fehler aufgetreten!'));

  });
});
