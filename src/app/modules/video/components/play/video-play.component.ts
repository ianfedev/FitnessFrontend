import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IVideoPair} from '../../../../models/IVideo';

@Component({
  selector: 'app-search',
  templateUrl: './video-play.component.html'
})
export class VideoPlayComponent implements OnInit {

  public collapsed: boolean;
  public video: IVideoPair;

  constructor(
    private route: ActivatedRoute
  ) {
    this.collapsed = true;
    this.video = {} as IVideoPair;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.video = data.VideoPlayGuard;
    });
  }
}
