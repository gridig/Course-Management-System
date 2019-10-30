import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StudentModel } from './student.model';
import { environment } from 'src/environments/environment';


@Injectable()

export class StudentService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.API_URL}students`;
  }

  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }

  createStudent(student: StudentModel): Observable<any> {
    return this.http.post(this.url, student);
  }

  editStudent(id: number, student: StudentModel): Observable<any> {
    return this.http.put(`${this.url}/${id}`, student);
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
