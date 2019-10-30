import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CourseService } from '../core/course.service';
import { CourseModel } from '../core/course.model';
import { CourseModalComponent } from '../course-modal/course-modal.component';
import { AlertService } from 'src/app/shared/alert/alert.service';

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
    this.courseService.getCourses().subscribe((courses: CourseModel[]) => this.courses = courses);
  }

  editCourse(course: CourseModel) {
    this.openModal(course);
  }

  addCourse() {
    this.openModal();
  }

  delete(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      result => this.alert.info('Course deleted'),
      err => this.alert.error('Unexpected error')
    );
  }

  private openModal(course?: CourseModel) {
    this.bsModalRef = this.modalService.show(CourseModalComponent, { initialState: { course } });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = course ? 'Edit Course' : 'Add Course';
  }

}
