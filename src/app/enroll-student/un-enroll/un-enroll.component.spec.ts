import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnEnrollComponent } from './un-enroll.component';

describe('UnEnrollComponent', () => {
  let component: UnEnrollComponent;
  let fixture: ComponentFixture<UnEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
