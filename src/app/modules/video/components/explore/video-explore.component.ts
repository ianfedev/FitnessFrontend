import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './video-explore.component.html'
})
export class VideoExploreComponent {

  constructor(
    private router: Router
  ) {
  }

}
