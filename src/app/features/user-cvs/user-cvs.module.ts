import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCvsRoutingModule } from './user-cvs-routing.module';
import { UserCvsComponent } from './user-cvs.component';


@NgModule({
  declarations: [
    UserCvsComponent
  ],
  imports: [
    CommonModule,
    UserCvsRoutingModule
  ]
})
export class UserCvsModule { }
