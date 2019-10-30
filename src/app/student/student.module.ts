import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './core/student.service';
import { StudentModalComponent } from './student-modal/student-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentModalComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    StudentService,
    BsModalService
  ],
  entryComponents: [
    StudentModalComponent
  ]
})
export class StudentModule { }
