import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './video-search.component.html'
})
export class VideoSearchComponent {

  public images: string[];
  public collapsed: boolean;

  constructor() {
    this.images = [
      'assets/img/banner/1.png'
    ];
    this.collapsed = true;
  }
}
