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

  constructor(
    public bsModalRef: BsModalRef,
    private studentService: StudentService) { }

  ngOnInit() {
    setTimeout(() => {
      this.student = this.bsModalRef.content.student || new StudentModel();
      this.studentForm = new FormGroup({
        firstName: new FormControl(this.student.firstName, Validators.required),
        lastName: new FormControl(this.student.lastName, Validators.required)
      });
    });
  }
  confirm(value: StudentModel) {
    const { createStudent, editStudent } = this.studentService;
    this.student.id ? editStudent(value) : createStudent(value);
  }

}
