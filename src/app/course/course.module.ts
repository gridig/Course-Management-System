import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    ReactiveFormsModule
  ],
  providers: [CourseService],
  exports: [
    CourseCardComponent
  ],
  entryComponents: [
    CourseModalComponent
  ]
})
export class CourseModule { }