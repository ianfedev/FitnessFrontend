import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ApplicationHeaderComponent} from './components/header/application-header.component';
import {SharedModule} from '../../shared.module';
import {ApplicationHomeComponent} from './components/home/application-home.component';
import {ApplicationRouting} from './application.routing';


@NgModule({
  declarations: [
    ApplicationHeaderComponent,
    ApplicationHomeComponent
  ],
  exports: [
    ApplicationHeaderComponent
  ],
  imports: [
    CommonModule,
    ApplicationRouting,
    NgbModule,
    FormsModule,
    SharedModule
  ]
})
export class ApplicationModule { }
