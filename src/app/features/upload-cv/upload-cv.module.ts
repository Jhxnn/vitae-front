import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadCvRoutingModule } from './upload-cv-routing.module';
import { UploadCvComponent } from './upload-cv.component';


@NgModule({
  declarations: [
    UploadCvComponent
  ],
  imports: [
    CommonModule,
    UploadCvRoutingModule
  ]
})
export class UploadCvModule { }
