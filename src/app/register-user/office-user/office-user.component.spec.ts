import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeUserComponent } from './office-user.component';

describe('OfficeUserComponent', () => {
  let component: OfficeUserComponent;
  let fixture: ComponentFixture<OfficeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
