import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistoComponent } from './acquisto.component';

describe('AcquistoComponent', () => {
  let component: AcquistoComponent;
  let fixture: ComponentFixture<AcquistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
