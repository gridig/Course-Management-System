import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './core/student.service';



@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule
  ],
  providers: [StudentService]
})
export class StudentModule { }
