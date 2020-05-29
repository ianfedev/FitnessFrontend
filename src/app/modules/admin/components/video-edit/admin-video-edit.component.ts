import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IYouTubeVideo} from '../../../../models/youtube/IYouTubeVideo';
import {YoutubeService} from '../../../../services/youtube.service';
import {IVideoCreation} from '../../../../models/IVideo';
import {ICategory} from '../../../../models/ICategory';

@Component({
  selector: 'app-admin-video-edit',
  templateUrl: './admin-video-edit.component.html'
})
export class AdminVideoEditComponent implements OnInit {

  public create: boolean;
  public youtubeVideo: IYouTubeVideo;
  public badges: ICategory[];
  public request: IVideoCreation;
  public link: string;
  public title: string;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private youtubeService: YoutubeService
  ) {
    this.title = 'Crear video';
    this.youtubeVideo = null;
    this.badges = [];
    this.request = {id: '', tag: ''};
    this.create = this.routeSnapshot.snapshot.url[1].path === 'create';
  }

  ngOnInit(): void {
    this.routeSnapshot.data.subscribe(
      data => {
        this.badges = data.AdminVideoEditGuard;
      }
    );
  }

  videoChange(event): void {
    const v = this.link.split('?v=')[1];
    if (v === null) {
      this.resetVideo();
    } else {
      this.youtubeService.get(v).subscribe(
        response => {
          if (response.items.length === 0) {
            this.resetVideo();
          } else {
            this.youtubeVideo = response.items[0];
            this.request.tag = v;
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
