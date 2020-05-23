import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ResponsiveMenuDirective} from './directives/responsive.menu.directive';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';


@NgModule({
  declarations: [
    ResponsiveMenuDirective
  ],
  exports: [
    ResponsiveMenuDirective
  ],
  providers: [
    UserService,
    GroupService
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class SharedModule { }
