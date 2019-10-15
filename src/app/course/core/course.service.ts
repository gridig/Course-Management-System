import { Injectable } from '@angular/core';
import { CourseModel } from './course.model';

const COURSES = [
  {
    id: 1,
    name: 'Angular Course',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  },
  {
    id: 2,
    name: 'ReactJs Course',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  },
  {
    id: 3,
    name: 'AngularJS Course',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  },
  {
    id: 4,
    name: 'Node Course',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  },
];

@Injectable()

export class CourseService {

  getCourses(): CourseModel[] {
    return COURSES;
  }

}