import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IVideoPair} from '../../../../models/IVideo';

@Component({
  selector: 'app-search',
  templateUrl: './video-search.component.html'
})
export class VideoSearchComponent implements OnInit{

  public collapsed: boolean;
  public videos: IVideoPair[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.collapsed = true;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.videos = data.VideoSearchGuard;
    });
  }

  filter(params): void {
    this.router.navigate(['/video/search'], {queryParams: params});
  }
}
