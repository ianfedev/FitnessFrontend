import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from '@angular/router';
import {GroupService} from '../../../services/group.service';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {ICategory} from '../../../models/ICategory';
import {CategoryService} from '../../../services/category.service';
import {IVideo, IVideoEdit} from '../../../models/IVideo';
import {VideoService} from '../../../services/video.service';
import {YoutubeService} from '../../../services/youtube.service';
import {IYouTubeVideo} from '../../../models/youtube/IYouTubeVideo';

@Injectable()
export class AdminVideoEditGuard implements CanActivate, Resolve<IVideoEdit> {

  constructor(
    private groupService: GroupService,
    private categoryService: CategoryService,
    private videoService: VideoService,
    private youtubeService: YoutubeService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.groupService.permissions().pipe(map(permission => permission.admin));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVideoEdit> {
    if (route.url[1].path === 'edit') {
      return this.videoService.get(route.params.id).pipe(
        mergeMap((video) =>
          forkJoin(
            [this.categoryService.list(), this.youtubeService.get(video.id)]
          ).pipe(
            map((response) => ({
              categories: response[0],
              video,
              youtube: response[1].items[0]
            } as IVideoEdit))
          )
        )
      );
    } else {
      return this.categoryService.list().pipe(
        map((category) => ({
          categories: category,
          video: {} as IVideo,
          youtube: {} as IYouTubeVideo
        }))
      );
    }
  }

}
