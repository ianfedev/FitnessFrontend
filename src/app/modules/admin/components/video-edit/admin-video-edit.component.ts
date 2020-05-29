import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IYouTubeVideo} from '../../../../models/youtube/IYouTubeVideo';
import {YoutubeService} from '../../../../services/youtube.service';
import {IVideoCreation, IVideoEdit} from '../../../../models/IVideo';
import {ICategory} from '../../../../models/ICategory';
import {VideoService} from '../../../../services/video.service';

@Component({
  selector: 'app-admin-video-edit',
  templateUrl: './admin-video-edit.component.html'
})
export class AdminVideoEditComponent implements OnInit {

  public create: boolean;
  public youtubeVideo: IYouTubeVideo;
  public baseVideo: IVideoEdit;
  public request: IVideoCreation;
  public link: string;
  public title: string;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private youtubeService: YoutubeService,
    private router: Router,
    private videoService: VideoService
  ) {
    this.title = 'Crear video';
    this.youtubeVideo = null;
    this.baseVideo = {} as IVideoEdit;
    this.request = {id: '', tag: ''};
    this.create = this.routeSnapshot.snapshot.url[1].path === 'create';
  }

  ngOnInit(): void {
    this.routeSnapshot.data.subscribe(
      data => {
        this.baseVideo = data.AdminVideoEditGuard;
        if (this.routeSnapshot.snapshot.url[1].path === 'edit') {
          this.link = 'https://www.youtube.com/watch?v=' + this.baseVideo.video.id;
          this.videoChange(null);
          this.title = 'Editar video ' + this.baseVideo.video.tag.name;
          this.request.tag = this.baseVideo.video.tag.id + '';
        }
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

  alterRequest(): void {
    if (this.routeSnapshot.snapshot.url[1].path === 'edit') {
      this.videoService.update(this.request).subscribe(
        response => {
          this.router.navigate(['/admin/videos']);
        },

        error => {
          console.log(error);
        }
      );
    } else {
      this.videoService.create(this.request).subscribe(
        response => {
          this.router.navigate(['/admin/videos']);
        },

        error => {
          console.log(error);
        }
      );
    }
  }

}
