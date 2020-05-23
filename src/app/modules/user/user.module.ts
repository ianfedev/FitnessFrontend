import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRouting} from './user.routing';
import {UserAccountComponent} from './components/account/user-account.component';
import {ApplicationPermissionsGuard} from '../application/guards/application-permissions.guard';
import {UserAccountGuard} from './guards/user-account.guard';

@NgModule({
  declarations: [
    UserAccountComponent
  ],
  exports: [
  ],
  providers: [
    ApplicationPermissionsGuard,
    UserAccountGuard
  ],
  imports: [
    CommonModule,
    UserRouting
  ]
})
export class UserModule { }
