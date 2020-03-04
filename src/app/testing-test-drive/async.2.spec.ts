// this is just a little test for async tests
// this is not a real part of the BookMonkey, you can ignore this file

import { async } from '@angular/core/testing';

describe('async tests', () => {
  it('can be simplified via async()', async(() => {

    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 500);
  }));
});
