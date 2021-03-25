import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinoComponent } from './listino.component';

describe('ListinoComponent', () => {
  let component: ListinoComponent;
  let fixture: ComponentFixture<ListinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
