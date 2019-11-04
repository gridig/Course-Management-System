import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseConfirmModalComponent } from './course-confirm-modal.component';

describe('CourseConfirmModalComponent', () => {
  let component: CourseConfirmModalComponent;
  let fixture: ComponentFixture<CourseConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
