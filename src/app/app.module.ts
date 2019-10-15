import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { CourseModule } from './course/course.module';
import { Page404Module } from './page404/page404.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CourseModule,
    Page404Module,
    StudentModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
