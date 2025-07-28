import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCvsComponent } from './user-cvs.component';

const routes: Routes = [{ path: '', component: UserCvsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCvsRoutingModule { }
