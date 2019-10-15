import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'cm-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.css']
})

export class CourseModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
}

// dodati kurs ovdje da imamo varijable course.name, course.id, course.description
