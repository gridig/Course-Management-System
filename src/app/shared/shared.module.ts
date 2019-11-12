import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { TruncatePipe } from './trancate-pipe/truncate.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TruncatePipe
  ],
})
export class SharedModule { }
