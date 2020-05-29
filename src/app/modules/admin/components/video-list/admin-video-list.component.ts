import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../../services/group.service';
import {IYouTubeVideo} from '../../../../models/youtube/IYouTubeVideo';
import {VideoService} from '../../../../services/video.service';
import {IVideoPair} from '../../../../models/IVideo';

@Component({
  selector: 'app-admin-video-list',
  templateUrl: './admin-video-list.component.html'
})
export class AdminVideoListComponent implements OnInit {

  public videos: IVideoPair[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private videoService: VideoService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.videos = data.AdminVideoListGuard;
      }
    );
  }

  deleteVideo(id: string): void {
    this.videoService.delete(id).subscribe(
      user => {
        this.router.navigate(['/admin/users']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
