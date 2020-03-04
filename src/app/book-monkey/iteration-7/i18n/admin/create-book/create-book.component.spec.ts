import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateBookComponent } from './create-book.component';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
