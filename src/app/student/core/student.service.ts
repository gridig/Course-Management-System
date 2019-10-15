import { Injectable } from '@angular/core';
import { StudentModel } from './student.model';

const STUDENTS = [
  {
    id: 1,
    firstName: 'Herta',
    lastName: 'Riatt',
  },
  {
    id: 2,
    firstName: 'Alec',
    lastName: 'Greswell',
  },
  {
    id: 3,
    firstName: 'Klarika',
    lastName: 'Jobke',
  },
  {
    id: 4,
    firstName: 'Sheeree',
    lastName: 'Proudlock',
  },
];

@Injectable()

export class StudentService {

  getStudents(): StudentModel[] {
    return STUDENTS;
  }
}
