import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IYouTubeVideo} from '../../../../models/youtube/IYouTubeVideo';
import {YoutubeService} from '../../../../services/youtube.service';
import {IVideo} from '../../../../models/IVideo';

@Component({
  selector: 'app-admin-video-edit',
  templateUrl: './admin-video-edit.component.html'
})
export class AdminVideoEditComponent implements OnInit {

  public create: boolean;
  public youtubeVideo: IYouTubeVideo;
  public badges: string[];
  public videoModel: IVideo;
  public link: string;
  public title: string;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private youtubeService: YoutubeService
  ) {
    this.title = 'Crear video';
    this.videoModel = {} as IVideo;
    this.youtubeVideo = null;
    this.badges = [];
    this.link = '';
    this.create = this.routeSnapshot.snapshot.url[1].path === 'create';
  }

  ngOnInit(): void {
    this.routeSnapshot.data.subscribe(
      data => {
        this.badges = data.AdminVideoEditGuard.map(badge => badge.name);
      }
    );
  }

  videoChange(event): void {
    if (this.link.split('?v=')[1] === null) {
      this.resetVideo();
    } else {
      this.youtubeService.get(this.link.split('?v=')[1]).subscribe(
        response => {
          if (response.items.length === 0) {
            this.resetVideo();
          } else {
            this.youtubeVideo = response.items[0];
          }
        },

        error => {
          this.resetVideo();
        }
      );
    }
  }

  resetVideo(): void {
    this.youtubeVideo = {} as IYouTubeVideo;
  }

}
