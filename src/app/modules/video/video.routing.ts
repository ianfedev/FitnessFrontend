import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoSearchComponent} from './components/search/video-search.component';
import {VideoPlayComponent} from './components/play/video-play.component';
import {VideoExploreComponent} from './components/explore/video-explore.component';


const routes: Routes = [
  {path: 'explore', component: VideoExploreComponent},
  {path: 'search', component: VideoSearchComponent},
  {path: 'play', component: VideoPlayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRouting { }
