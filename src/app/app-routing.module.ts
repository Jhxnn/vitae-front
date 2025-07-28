import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'upload-cv',
    loadChildren: () => import('./features/upload-cv/upload-cv.module').then(m => m.UploadCvModule)
  },
  {
    path: 'user-cvs',
    loadChildren: () => import('./features/user-cvs/user-cvs.module').then(m => m.UserCvsModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./features/ranking/ranking.module').then(m => m.RankingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
