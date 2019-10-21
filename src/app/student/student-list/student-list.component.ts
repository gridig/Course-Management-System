import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { StudentModel } from '../core/student.model';
import { StudentService } from '../core/student.service';
import { StudentModalComponent } from '../student-modal/student-modal.component';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];
  bsModalRef: BsModalRef;

  constructor(
    private studentService: StudentService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
  editStudent(student: StudentModel) {
    this.bsModalRef = this.modalService.show(StudentModalComponent, { initialState: { student } });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Edit Student';
  }
  addStudent() {
    this.bsModalRef = this.modalService.show(StudentModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = 'Add Student';
  }

}
