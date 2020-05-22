import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ApplicationModule} from './modules/application/application.module';
import {SharedModule} from './shared.module';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';
import {VideoModule} from './modules/video/video.module';
import {UserModule} from './modules/user/user.module';
import {AdminModule} from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ApplicationModule,
    VideoModule,
    UserModule,
    AppRouting,
    AdminModule,
    RouterModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
