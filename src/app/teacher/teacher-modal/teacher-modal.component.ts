import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cm-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.css']
})
export class TeacherModalComponent implements OnInit {

  teacher: TeacherModel;
  teacherForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private teacherService: TeacherService) { }

  ngOnInit() {
    setTimeout(() => {
      this.teacher = this.bsModalRef.content.teacher || new TeacherModel();
      this.teacherForm = new FormGroup({
        firstName: new FormControl(this.teacher.firstName, Validators.required),
        lastName: new FormControl(this.teacher.lastName, Validators.required)
      });
    });
  }

  confirm(value: TeacherModel) {
    const { createTeacher, editTeacher } = this.teacherService;
    this.teacher.id ? editTeacher(value) : createTeacher(value);
  }
}
