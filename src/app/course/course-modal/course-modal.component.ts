import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { TeacherService } from 'src/app/teacher/core/teacher.service'
import { TeacherModel } from 'src/app/teacher/core/teacher.model'
import { StudentModel } from 'src/app/student/core/student.model';
import { StudentService } from 'src/app/student/core/student.service';

@Component({
  selector: 'cm-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.css']
})

export class CourseModalComponent implements OnInit {
  course: CourseModel;
  courseForm: FormGroup;
  teachers: TeacherModel[];
  students: StudentModel[];
  teacherSelectArr: Array<any>;
  studentSelectArr: Array<any>;

  constructor(
    public bsModalRef: BsModalRef,
    private courseService: CourseService,
    private teacherService: TeacherService,
    private studentService: StudentService
  ) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.course = this.bsModalRef.content.course || new CourseModel();
      this.teachers = this.teacherService.getTeachers();
      this.students = this.studentService.getStudents();

      this.createCourseForm();

    });
  }

  confirm(value: CourseModel) {
    this.course.id ?
    this.courseService.editCourse(this.course.id, value).subscribe(      
      result => console.log('SUCCESS', result),
      err => console.log("ACHTUNG, EDIT ERROR", err)
    ) :
    this.courseService.createCourse(value).subscribe(
      result => console.log(result),
      err => console.log("ACHTUNG, CREATE ERROR", err)
    );
  }

  private createCourseForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(this.course.name, Validators.required),
      description: new FormControl(this.course.description, Validators.required),
      teacherId: new FormControl(this.course.teacherId, Validators.required),
      studentIds: new FormControl(this.course.studentIds),
      date: new FormControl(this.course.date, Validators.required)
    });
  }

}
