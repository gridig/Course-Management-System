import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseModel } from './course.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class CourseService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.API_URL}courses`;
   }

  getCourses(): Observable<any> {
    return this.http.get('');
  }

  createCourse(course: CourseModel) {
    return this.http.post(this.url, course);
  }

  editCourse(id: number, course: CourseModel) {
    return this.http.put(`${this.url}/${id}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}