import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './video-search.component.html'
})
export class VideoSearchComponent {

  public collapsed: boolean;

  constructor() {
    this.collapsed = true;
  }
}
