import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-course-confirm-modal',
  templateUrl: './course-confirm-modal.component.html',
  styleUrls: ['./course-confirm-modal.component.css']
})
export class CourseConfirmModalComponent implements OnInit {
  title: string;
  onConfirm = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  confirm() {
    this.onConfirm.emit(true);
  }
}
