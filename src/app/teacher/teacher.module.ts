import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { TeacherService } from './core/teacher.service';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherModalComponent } from './teacher-modal/teacher-modal.component';


@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherModalComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TeacherService,
    BsModalService
  ],
  entryComponents: [
    TeacherModalComponent
  ]
})
export class TeacherModule { }
