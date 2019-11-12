import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'cm-course-confirm-modal',
  templateUrl: './course-confirm-modal.component.html',
  styleUrls: ['./course-confirm-modal.component.css']
})
export class CourseConfirmModalComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.onConfirm.unsubscribe();
  }
}
