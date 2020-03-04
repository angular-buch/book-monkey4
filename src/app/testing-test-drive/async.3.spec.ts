// this is just a little test for async tests
// this is not a real part of the BookMonkey, you can ignore this file

import { fakeAsync, tick } from '@angular/core/testing';

describe('async tests', () => {
  it('can be also simplified via fakeAsync() and tick()', fakeAsync(() => {

    let flag = false;

    setTimeout(() => {
      flag = true;
    }, 500);

    tick(500);
    expect(flag).toBeTruthy();
  }));
});
