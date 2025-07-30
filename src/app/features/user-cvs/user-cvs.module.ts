import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCvsRoutingModule } from './user-cvs-routing.module';
import { UserCvsComponent } from './user-cvs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserCvsComponent
  ],
  imports: [
    CommonModule,
    UserCvsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserCvsModule { }
