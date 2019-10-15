import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../core/student.model';
import { StudentService } from '../core/student.service';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
