import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationHomeComponent} from './components/home/application-home.component';
import {ApplicationLoginComponent} from './components/login/application-login.component';
import {ApplicationLoginGuard} from './guards/application-login.guard';
import {ApplicationHomeGuard} from './guards/application-home.guard';


const routes: Routes = [
  {path: 'login', component: ApplicationLoginComponent, canActivate: [ApplicationLoginGuard]},
  {path: 'register', component: ApplicationLoginComponent, canActivate: [ApplicationLoginGuard]},
  {path: '', component: ApplicationHomeComponent, resolve: {ApplicationHomeGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRouting { }
