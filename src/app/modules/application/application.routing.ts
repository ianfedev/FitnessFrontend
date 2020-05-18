import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationHomeComponent} from './components/home/application-home.component';


const routes: Routes = [
  {path: '', component: ApplicationHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRouting { }
