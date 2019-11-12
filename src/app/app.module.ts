import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { Page404Module } from './page404/page404.module';
import { CoreModule } from './core/core.module';

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
    ToastrModule.forRoot(),
    CoreModule,
    Page404Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
