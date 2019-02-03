import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPaymentsComponent } from './enter-payments.component';

describe('EnterPaymentsComponent', () => {
  let component: EnterPaymentsComponent;
  let fixture: ComponentFixture<EnterPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
