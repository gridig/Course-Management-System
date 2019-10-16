import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CourseService } from '../core/course.service';
import { CourseModel } from '../core/course.model';
import { CourseModalComponent } from '../course-modal/course-modal.component';

@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: CourseModel[];
  bsModalRef: BsModalRef;

  constructor(
    private courseService: CourseService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  editCourse(course: CourseModel) {
    this.bsModalRef = this.modalService.show(CourseModalComponent, { initialState: {course} });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Edit Course';
  }

  addCourse() {
    this.bsModalRef = this.modalService.show(CourseModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Add Course';
  }
}

