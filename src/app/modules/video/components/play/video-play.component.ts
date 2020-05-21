import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './video-play.component.html'
})
export class VideoPlayComponent {

  public collapsed: boolean;

  constructor() {
    this.collapsed = true;
  }
}
