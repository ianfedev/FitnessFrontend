import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationHomeComponent} from './components/home/application-home.component';
import {ApplicationLoginComponent} from './components/login/application-login.component';


const routes: Routes = [
  {path: 'login', component: ApplicationLoginComponent},
  {path: '', component: ApplicationHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRouting { }
