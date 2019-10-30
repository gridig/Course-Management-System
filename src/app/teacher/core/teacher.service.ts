import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TeacherModel } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url: string;
  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.API_URL}teachers`;
  }

  getTeachers(): Observable<any> {
    return this.http.get(this.url);
  }

  createTeacher(teacher: TeacherModel): Observable<any> {
    return this.http.post(this.url, teacher);
  }

  editTeacher(id: number, teacher: TeacherModel): Observable<any> {
    return this.http.put(`${this.url}/${id}`, teacher);
  }
  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
