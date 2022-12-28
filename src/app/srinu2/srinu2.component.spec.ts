import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Srinu2Component } from './srinu2.component';

describe('Srinu2Component', () => {
  let component: Srinu2Component;
  let fixture: ComponentFixture<Srinu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Srinu2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Srinu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
