import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadCvRoutingModule } from './upload-cv-routing.module';
import { UploadCvComponent } from './upload-cv.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UploadCvComponent
  ],
  imports: [
    CommonModule,
    UploadCvRoutingModule,
    HttpClientModule
  ]
})
export class UploadCvModule { }
