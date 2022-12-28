import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshComponent } from './mahesh.component';

describe('MaheshComponent', () => {
  let component: MaheshComponent;
  let fixture: ComponentFixture<MaheshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaheshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaheshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
