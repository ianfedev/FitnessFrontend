import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'video', loadChildren: () => import('./modules/video/video.module').then(m => m.VideoModule)},
  {path: 'user', loadChildren: () =>  import('./modules/user/user.module').then(m => m.UserModule)},
  {path: '', loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
