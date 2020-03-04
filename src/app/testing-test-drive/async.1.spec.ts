// this is just a little test for async tests
// this is not a real part of the BookMonkey, you can ignore this file

describe('async tests', () => {
  it('require a signal that execution has been finished', (done) => {

    setTimeout(() => {
      expect(true).toBeTruthy();
      done();
    }, 500);
  });
});
