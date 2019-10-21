import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';
import { BsModalService, BsModalRef, } from 'ngx-bootstrap/modal';
import { TeacherModalComponent } from '../teacher-modal/teacher-modal.component';

@Component({
  selector: 'cm-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: TeacherModel[];
  bsModalRef: BsModalRef;

  constructor(
    private teacherService: TeacherService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }

  editTeacher(teacher: TeacherModel) {
    this.bsModalRef = this.modalService.show(TeacherModalComponent, { initialState: { teacher } });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Edit Teacher';
  }

  addTeacher() {
    this.bsModalRef = this.modalService.show(TeacherModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Add Teacher';
  }
}
