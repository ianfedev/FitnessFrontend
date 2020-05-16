import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ResponsiveMenuDirective} from './directives/responsive.menu.directive';


@NgModule({
  declarations: [
    ResponsiveMenuDirective
  ],
  exports: [
    ResponsiveMenuDirective
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class SharedModule { }
