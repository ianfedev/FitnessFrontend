import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared.module';
import {VideoRouting} from './video.routing';
import {VideoSearchComponent} from './components/search/video-search.component';
import {VideoPlayComponent} from './components/play/video-play.component';
import {VideoExploreComponent} from './components/explore/video-explore.component';
import {VideoSearchGuard} from './guards/video-search.guard';
import {VideoPlayGuard} from './guards/video-play.guard';


@NgModule({
  declarations: [
    VideoSearchComponent,
    VideoPlayComponent,
    VideoExploreComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    VideoRouting,
    NgbModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    VideoSearchGuard,
    VideoPlayGuard
  ]
})
export class VideoModule { }
