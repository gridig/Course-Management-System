import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseService } from './core/course.service';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseModalComponent } from './course-modal/course-modal.component';

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
    NgSelectModule
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


