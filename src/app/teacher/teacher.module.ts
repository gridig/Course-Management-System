import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { TeacherService } from './core/teacher.service';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherModalComponent } from './teacher-modal/teacher-modal.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';


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
    ReactiveFormsModule,
    SharedModule,
    TeacherRoutingModule
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
