import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/course/core/course.model';
import { CourseService } from 'src/app/course/core/course.service';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: CourseModel[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
}
