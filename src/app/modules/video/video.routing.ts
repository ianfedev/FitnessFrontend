import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoSearchComponent} from './components/search/video-search.component';


const routes: Routes = [
  {path: 'search', component: VideoSearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRouting { }
