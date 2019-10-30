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

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent,
    CourseModalComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    SharedModule
  ],
  providers: [
    CourseService,
    BsModalService
  ],
  exports: [
    CourseCardComponent
  ],
  entryComponents: [
    CourseModalComponent
  ]
})
export class CourseModule { }


