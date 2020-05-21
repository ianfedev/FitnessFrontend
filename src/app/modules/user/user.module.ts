import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRouting} from './user.routing';
import {UserAccountComponent} from './components/account/user-account.component';

@NgModule({
  declarations: [
    UserAccountComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    UserRouting
  ]
})
export class UserModule { }
