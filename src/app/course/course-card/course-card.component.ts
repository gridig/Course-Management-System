import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../core/course.model';
import { compileBaseDefFromMetadata } from '@angular/compiler';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: CourseModel;
  constructor() { }

  ngOnInit() {
  }
}

