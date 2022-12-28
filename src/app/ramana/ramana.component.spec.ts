import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamanaComponent } from './ramana.component';

describe('RamanaComponent', () => {
  let component: RamanaComponent;
  let fixture: ComponentFixture<RamanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
