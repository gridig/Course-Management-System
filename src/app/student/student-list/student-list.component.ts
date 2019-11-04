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
  
  title = 'Students';
  students: StudentModel[];
  bsModalRef: BsModalRef;

  constructor(
    private studentService: StudentService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe((result: StudentModel[]) => this.students = result);
  }

  editStudent(student: StudentModel) {
    this.openModal(student);
  }

  addStudent() {
    this.openModal();
  }

  delete(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      result => console.log('SUCCES', result),
      err => console.log('ERR', err)
    );
  }

  private openModal(student?: StudentModel) {
    this.bsModalRef = this.modalService.show(StudentModalComponent, { initialState: { student } });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = student ? 'Edit Student' : 'Add Student';
  }

}
