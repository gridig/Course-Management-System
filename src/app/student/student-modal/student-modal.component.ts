import { Component, OnInit } from '@angular/core';
import { StudentService } from '../core/student.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StudentModel } from '../core/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cm-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {
  student: StudentModel;
  studentForm: FormGroup;
  radioGroupForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.student = this.bsModalRef.content.student || new StudentModel();
      this.createStudentForm();
    });
  }

  confirm(value: StudentModel) {
    this.student.id ?
      this.studentService.editStudent(this.student.id, value).subscribe(
        result => console.log('SUCCESS', result),
        err => console.log('ERROR', err)
      ) :
      this.studentService.createStudent(value).subscribe(
        result => console.log('SUCCESS', result),
        err => console.log('ERROR', err)
      );
  }

  private createStudentForm() {
    this.studentForm = new FormGroup({
      firstName: new FormControl(this.student.firstName, Validators.required),
      lastName: new FormControl(this.student.lastName, Validators.required),
      email: new FormControl(this.student.email),
      gender: new FormControl(this.student.gender),
      phoneNumber: new FormControl(this.student.phoneNumber)
    });
  }

}
