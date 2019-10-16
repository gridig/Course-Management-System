import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';

@Component({
  selector: 'cm-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.css']
})

export class CourseModalComponent implements OnInit {

  course: CourseModel;
  courseForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.course = this.bsModalRef.content.course || new CourseModel();

      this.courseForm = new FormGroup({
        name: new FormControl(this.course.name, Validators.required),
        description: new FormControl(this.course.description, Validators.required),
      });
    });

  }

  confirm(value: CourseModel) {
    const { createCourse, editCourse } = this.courseService;
    this.course.id ? editCourse(value) : createCourse(value);
  }
}

// zadaća:
// forma za studenta - add i edit
// nova sekcija Teachers - ID i name, add i edit
// disablati button (kada forma nije validna)