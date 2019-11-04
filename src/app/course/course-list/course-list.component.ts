import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CourseService } from '../core/course.service';
import { CourseModel } from '../core/course.model';
import { CourseModalComponent } from '../course-modal/course-modal.component';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { CourseConfirmModalComponent } from '../course-confirm-modal/course-confirm-modal.component';

@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Courses';
  courses: CourseModel[];
  bsModalRef: BsModalRef;

  constructor(
    private courseService: CourseService,
    private modalService: BsModalService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loadCourses()
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((courses: CourseModel[]) => this.courses = courses);

  }

  editCourse(course: CourseModel) {
    this.openModal(course);
  }

  addCourse() {
    this.openModal();
  }

  delete(course: CourseModel) {
    this.openConfirmModal(course);


  }

  private openConfirmModal(course: CourseModel) {
    this.bsModalRef = this.modalService.show(CourseConfirmModalComponent);
    this.bsModalRef.content.title = `Delete ${course.name} ?`;
    console.log(this.bsModalRef.content.title);
    this.bsModalRef.content.onConfirm.subscribe((shouldDelete: boolean) => {
      if (!shouldDelete) {
        return
      }
      this.courseService.deleteCourse(course.id).subscribe(
        result => {
          this.alert.info('Course is deleted');
          this.loadCourses();
          this.bsModalRef.hide();
        },
        err => this.alert.error('Unexpected error')
      );
    })
  }

  private openModal(course?: CourseModel) {
    this.bsModalRef = this.modalService.show(CourseModalComponent, { initialState: { course } });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = course ? 'Edit Course' : 'Add Course';
    this.bsModalRef.content.onSubmitSuccess.subscribe(shouldReload => {
      if (!shouldReload) {
        return
      }
      this.bsModalRef.hide();
      this.loadCourses()
    })
  }

}
