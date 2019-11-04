import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { TeacherService } from 'src/app/teacher/core/teacher.service';
import { TeacherModel } from 'src/app/teacher/core/teacher.model';
import { StudentModel } from 'src/app/student/core/student.model';
import { StudentService } from 'src/app/student/core/student.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'cm-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseModalComponent implements OnInit {
  course: CourseModel;
  courseForm: FormGroup;
  teachers: TeacherModel[];
  students: StudentModel[];
  today =  Date.now();
  startDateMin = new Date(this.today);

  onSubmitSuccess = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private courseService: CourseService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private alert: AlertService,
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
    this.course.id ? this.updateCourse(value) : this.addCourse(value);
  }

  private addCourse(value: CourseModel) {
    this.courseService.createCourse(value).subscribe(
      result => {
        this.alert.success('Course is created');
        this.onSubmitSuccess.emit(true);
      },
      err => this.alert.error('Unexpected error while creating')
    );
  }

  private updateCourse(value: CourseModel) {
    this.courseService.editCourse(this.course.id, value).subscribe(
      result => {
        this.alert.success('Course is updated');
        this.onSubmitSuccess.emit(true);
      },
      err => this.alert.error('Unexpected error while editing')
    );
  }

  get nameField(): AbstractControl {
    return this.courseForm.get('name');
  }

  get locationField(): AbstractControl {
    return this.courseForm.get('location');
  }

  get teacherField(): AbstractControl {
    return this.courseForm.get('teacherId')
  }

  get startDateField(): AbstractControl {
    return this.courseForm.controls.startDate;
  }

  get endDateField(): AbstractControl {
    return this.courseForm.controls.endDate;
  }

  get startDateMax(): Date {
    return this.endDateField.value ? new Date(this.endDateField.value) : null;
  }

  get endDateMin(): Date {
    return this.startDateField.value ? new Date(this.startDateField.value) : null;
  }

  private createCourseForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(this.course.name, [Validators.required, Validators.minLength(6)]),
      teacherId: new FormControl(this.course.teacherId, Validators.required),
      startDate: new FormControl(this.course.startDate, Validators.required),
      endDate: new FormControl(this.course.endDate, Validators.required),
      location: new FormControl(this.course.location, Validators.required),
      state: new FormControl(this.course.state),
      address: new FormControl(this.course.address),
      studentIds: new FormControl(this.course.studentIds),
      description: new FormControl(this.course.description),
    });

  }

}
