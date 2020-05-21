import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAccountComponent} from './components/account/user-account.component';


const routes: Routes = [
  {path: 'account', component: UserAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting { }
