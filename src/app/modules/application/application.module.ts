import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ApplicationHeaderComponent} from './components/header/application-header.component';
import {SharedModule} from '../../shared.module';
import {ApplicationHomeComponent} from './components/home/application-home.component';
import {ApplicationRouting} from './application.routing';
import {ApplicationFooterComponent} from './components/footer/application-footer.component';
import {ApplicationLoginComponent} from './components/login/application-login.component';
import {ApplicationRegisterComponent} from './components/register/application-register.component';
import {ApplicationLoginGuard} from './guards/application-login.guard';
import {ApplicationHomeGuard} from './guards/application-home.guard';


@NgModule({
  declarations: [
    ApplicationHeaderComponent,
    ApplicationFooterComponent,
    ApplicationLoginComponent,
    ApplicationRegisterComponent,
    ApplicationHomeComponent
  ],
  exports: [
    ApplicationHeaderComponent,
    ApplicationFooterComponent
  ],
  providers: [
    ApplicationLoginGuard,
    ApplicationHomeGuard
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
