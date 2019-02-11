import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerTicketsComponent } from './passenger-tickets.component';

describe('PassengerTicketsComponent', () => {
  let component: PassengerTicketsComponent;
  let fixture: ComponentFixture<PassengerTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
