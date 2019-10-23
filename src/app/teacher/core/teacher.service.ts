import { Injectable } from '@angular/core';
import { TeacherModel } from './teacher.model';

const TEACHERS = [
  {
    fullName: '',
  },
  {
    id: 1,
    firstName: 'Mark',
    lastName: 'Hughes',
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Lawrence',
  },
  {
    id: 3,
    firstName: 'Will',
    lastName: 'Jones',
  },
  {
    id: 4,
    firstName: 'Britney',
    lastName: 'Smith',
  },
].map((i) => { i.fullName = i.firstName + ' ' + i.lastName; return i; });

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers(): TeacherModel[] {
    return TEACHERS;
  }

  createTeacher(teacher: TeacherModel) {
    TEACHERS.push(teacher);
  }

  editTeacher(teacher: TeacherModel) {
    // TODO: Handle edit
  }

}
