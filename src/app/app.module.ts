import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ApplicationModule} from './modules/application/application.module';
import {SharedModule} from './shared.module';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ApplicationModule,
    AppRouting,
    RouterModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
