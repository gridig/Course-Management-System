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

  title = 'Teachers';
  teachers: TeacherModel[];
  bsModalRef: BsModalRef;

  constructor(
    private teacherService: TeacherService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe((result: TeacherModel[]) => this.teachers = result);
  }

  editTeacher(teacher: TeacherModel) {
    this.openModal(teacher);
  }

  addTeacher() {
    this.openModal();
  }

  delete(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(
      result => console.log('Success', result),
      err => console.log('Error', err)
    );
  }

  private openModal(teacher?: TeacherModel) {
    this.bsModalRef = this.modalService.show(TeacherModalComponent, { initialState: { teacher } });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.title = teacher ? 'Edit Teacher' : 'Add Teacher';
  }
}
