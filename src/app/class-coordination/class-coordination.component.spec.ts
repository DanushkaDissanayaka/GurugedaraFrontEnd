import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCoordinationComponent } from './class-coordination.component';

describe('ClassCoordinationComponent', () => {
  let component: ClassCoordinationComponent;
  let fixture: ComponentFixture<ClassCoordinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCoordinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
