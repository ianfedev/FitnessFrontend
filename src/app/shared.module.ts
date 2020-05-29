import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ResponsiveMenuDirective} from './directives/responsive.menu.directive';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';
import {YoutubeService} from './services/youtube.service';
import {CategoryService} from './services/category.service';
import {VideoService} from './services/video.service';
import {SafePipe} from './pipes/safe.pipe';


@NgModule({
  declarations: [
    ResponsiveMenuDirective,
    SafePipe
  ],
  exports: [
    ResponsiveMenuDirective,
    SafePipe
  ],
  providers: [
    UserService,
    YoutubeService,
    CategoryService,
    VideoService,
    GroupService
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class SharedModule { }
