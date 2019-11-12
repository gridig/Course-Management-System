import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'courses',
        loadChildren: './course/course.module#CourseModule'
      },
      {
        path: 'students',
        loadChildren: './student/student.module#StudentModule'
      },
      {
        path: 'teachers',
        loadChildren: './teacher/teacher.module#TeacherModule'
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
