import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DelayDirective } from './delay.directive';

@Component({
  template: `<p *bmDelay="500">Test</p>`
})
class TestDelayDirectiveComponent { }

describe('DelayDirective', () => {
  let component: TestDelayDirectiveComponent;
  let fixture: ComponentFixture<TestDelayDirectiveComponent>;
  let pEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestDelayDirectiveComponent,
        DelayDirective
      ]
    });
    fixture = TestBed.createComponent(TestDelayDirectiveComponent);
    component = fixture.componentInstance;
    pEl = fixture.debugElement.query(By.css('p'));
  });

  it('should let the content appear delayed', fakeAsync(() => {
    fixture.detectChanges();
    expect(pEl).toBe(null);
    tick(500);
    fixture.whenStable().then(() => {
      pEl = fixture.debugElement.query(By.css('p'));
      expect(pEl.nativeElement.textContent).toContain('Test');
    });
  }));
});
