import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseModel } from './course.model';
import { Observable } from 'rxjs';

@Injectable()

export class CourseService {
  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:3000/courses');
  }

  createCourse(course: CourseModel) {
    return this.http.post('http://localhost:3000/courses', course);
  }

  editCourse(id: number, course: CourseModel) {
    return this.http.put('http://localhost:3000/courses/' + id, course);
  }

  deleteCourse(id: number) {
    return this.http.delete('http://localhost:3000/courses/' + id);
  }
}