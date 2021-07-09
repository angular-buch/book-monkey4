// this is just a little test for async tests
// this is not a real part of the BookMonkey, you can ignore this file

import { waitForAsync } from '@angular/core/testing';

describe('async tests', () => {
  it('can be simplified via async()', waitForAsync(() => {

    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 500);
  }));
});
