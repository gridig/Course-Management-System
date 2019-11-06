import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseService } from './core/course.service';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseModalComponent } from './course-modal/course-modal.component';
import { SharedModule } from '../shared/shared.module';
import { CourseConfirmModalComponent } from './course-confirm-modal/course-confirm-modal.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent,
    CourseModalComponent,
    CourseConfirmModalComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
    CourseRoutingModule
  ],
  providers: [
    CourseService,
    BsModalService
  ],
  exports: [
    CourseCardComponent
  ],
  entryComponents: [
    CourseModalComponent,
    CourseConfirmModalComponent
  ]
})
export class CourseModule { }


