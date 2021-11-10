import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a link to /home', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'].endsWith('/home');
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to /books', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'].endsWith('/books');
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to /admin', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'].endsWith('/admin');
    });
    expect(index).toBeGreaterThan(-1);
  });
});
