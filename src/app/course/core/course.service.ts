import { Injectable } from '@angular/core';
import { CourseModel } from './course.model';

import { HttpClient } from '@angular/common/http';
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
    return this.http.get(this.url);
  }

  createCourse(course: CourseModel): Observable<any> {
    return this.http.post(this.url, course);
  }

  editCourse(id: number, course: CourseModel): Observable<any> {
    return this.http.put(`${this.url}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}