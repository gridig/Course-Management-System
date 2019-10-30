import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';

@Component({
  selector: 'cm-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.css']
})
export class TeacherModalComponent implements OnInit {

  teacher: TeacherModel;
  teacherForm: FormGroup;
  radioGroupForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private teacherService: TeacherService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.teacher = this.bsModalRef.content.teacher || new TeacherModel();
      this.createTeacherForm();

    });
  }

  confirm(value: TeacherModel) {
    this.teacher.id ?
      this.teacherService.editTeacher(this.teacher.id, value).subscribe(
        result => console.log('SUCCESS', result),
        err => console.log('ERROR', err)
      ) :
      this.teacherService.createTeacher(value).subscribe(
        result => console.log('SUCCESS', result),
        err => console.log('ERROR', err)
      );
  }

  private createTeacherForm() {
    this.teacherForm = new FormGroup({
      firstName: new FormControl(this.teacher.firstName, Validators.required),
      lastName: new FormControl(this.teacher.lastName, Validators.required),
      email: new FormControl(this.teacher.email),
      gender: new FormControl(this.teacher.gender),
      phoneNumber: new FormControl(this.teacher.phoneNumber)
    });
  }
}
