import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoSearchComponent} from './components/search/video-search.component';
import {VideoPlayComponent} from './components/play/video-play.component';
import {VideoExploreComponent} from './components/explore/video-explore.component';
import {VideoSearchGuard} from './guards/video-search.guard';
import {VideoPlayGuard} from './guards/video-play.guard';


const routes: Routes = [
  {path: 'explore', component: VideoExploreComponent},
  {path: 'search', component: VideoSearchComponent, resolve: {VideoSearchGuard}},
  {path: 'play/:video', component: VideoPlayComponent, resolve: {VideoPlayGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRouting { }
