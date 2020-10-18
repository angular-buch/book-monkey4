import { /*BS*/browser, element, by/*BE*/ } from 'protractor';

describe('Angular Buch', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => /*BS*/browser.waitForAngularEnabled(false)/*BE*/);

  it('should be called Angular', () => {
    /*BS*/browser/*BE*/.get('https://ng-buch.de/buch3');
    const heading = /*BS*/element/*BE*/(/*BS*/by.tagName('h1')/*BE*/);
    expect(heading.getText()).toContain('Angular');
  });

  afterAll(() => /*BS*/browser.waitForAngularEnabled(true)/*BE*/);
});

