// this is just a little test for inject()
// this is not a real part of the BookMonkey, you can ignore this file

import { ErrorHandler } from '@angular/core';
import { inject } from '@angular/core/testing';

describe('inject()', () => {

  it('should inject the dependencies into the test',

    inject([ErrorHandler],
      (errorHandler: ErrorHandler) => {
      errorHandler.handleError(
        new Error('Es ist ein Fehler aufgetreten!'));
    })

  );
});
