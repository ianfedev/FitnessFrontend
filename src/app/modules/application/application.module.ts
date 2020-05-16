import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ApplicationHeaderComponent} from './components/application-header.component';
import {SharedModule} from '../../shared.module';


@NgModule({
  declarations: [
    ApplicationHeaderComponent
  ],
  exports: [
    ApplicationHeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SharedModule
  ]
})
export class ApplicationModule { }