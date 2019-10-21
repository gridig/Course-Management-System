import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { Page404Component } from './page404/page404.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';


const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'students',
        component: StudentListComponent
      },
      {
        path: 'teachers',
        component: TeacherListComponent
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
