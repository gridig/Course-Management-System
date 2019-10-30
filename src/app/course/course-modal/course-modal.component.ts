import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { TeacherService } from 'src/app/teacher/core/teacher.service';
import { TeacherModel } from 'src/app/teacher/core/teacher.model';
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

  constructor(
    public bsModalRef: BsModalRef,
    private courseService: CourseService,
    private teacherService: TeacherService,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.course = this.bsModalRef.content.course || new CourseModel();
      this.teacherService.getTeachers().subscribe(result => this.teachers = result);
      this.studentService.getStudents().subscribe(result => this.students = result);
      this.createCourseForm();
    });
  }

  confirm(value: CourseModel) {
    this.course.id ?

    this.courseService.editCourse(this.course.id, value).subscribe(
      result => console.log('SUCCESS', result),
      err => console.log('Error', err)
    ) :

    this.courseService.createCourse(value).subscribe(
      result => console.log(result),
      err => console.log('Error', err)
      );
  }

  get nameField(): AbstractControl {
    console.log(this.courseForm.get('name'));
    return this.courseForm.get('name');
  }

  private createCourseForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(this.course.name, [ Validators.required, Validators.minLength(6) ]),
      description: new FormControl(this.course.description, Validators.required),
      teacherId: new FormControl(this.course.teacherId, Validators.required),
      studentIds: new FormControl(this.course.studentIds),
      startDate: new FormControl(this.course.startDate, Validators.required),
      endDate: new FormControl(this.course.endDate, Validators.required),
      location: new FormControl(this.course.location, Validators.required),
      address: new FormControl(this.course.address),
      state: new FormControl(this.course.state, Validators.required)
    });
  }

}
