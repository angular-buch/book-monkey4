import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ZoomDirective } from './zoom.directive';

@Component({
  template: `<p bmZoom>hoverfocus</p>`
})
class TestZoomComponent {
}

describe('ZoomDirective', () => {
  let component: TestZoomComponent;
  let fixture: ComponentFixture<TestZoomComponent>;
  let pEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestZoomComponent,
        ZoomDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZoomComponent);
    component = fixture.componentInstance;
    pEl = fixture.debugElement.query(By.css('p'));
  });

  it('should zoom image on hover', () => {
    pEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.small')).not.toBeNull();

    pEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.small')).toBeNull();
  });
});

