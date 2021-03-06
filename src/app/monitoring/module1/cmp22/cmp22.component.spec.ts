import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp22Component} from './cmp22.component';

describe('Cmp22Component', () => {
  let component: Cmp22Component;
  let fixture: ComponentFixture<Cmp22Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp22Component],
          imports: [
            NoopAnimationsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatCardModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
