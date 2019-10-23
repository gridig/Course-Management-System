import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseModule } from './course/course.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { HomeModule } from './home/home.module';
import { Page404Module } from './page404/page404.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CourseModule,
    Page404Module,
    StudentModule,
    TeacherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
