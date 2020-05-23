import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAccountComponent} from './components/account/user-account.component';
import {UserAccountGuard} from './guards/user-account.guard';
import {ApplicationPermissionsGuard} from '../application/guards/application-permissions.guard';


const routes: Routes = [
  {path: 'account', component: UserAccountComponent, resolve: {ApplicationPermissionsGuard, UserAccountGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting { }
