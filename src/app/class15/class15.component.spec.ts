import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class15Component } from './class15.component';

describe('Class15Component', () => {
  let component: Class15Component;
  let fixture: ComponentFixture<Class15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Class15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Class15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
