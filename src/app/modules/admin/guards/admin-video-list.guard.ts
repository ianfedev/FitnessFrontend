import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from '@angular/router';
import {first, map, mergeMap} from 'rxjs/operators';
import {forkJoin, merge, Observable, of} from 'rxjs';
import {VideoService} from '../../../services/video.service';
import {GroupService} from '../../../services/group.service';
import {IYouTubeVideo} from '../../../models/youtube/IYouTubeVideo';
import {YoutubeService} from '../../../services/youtube.service';
import {IVideoPair} from '../../../models/IVideo';

@Injectable()
export class AdminVideoListGuard implements CanActivate, Resolve<IVideoPair[]> {

  constructor(
    private videoService: VideoService,
    private youtubeService: YoutubeService,
    private groupService: GroupService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.groupService.permissions().pipe(map(permission => permission.admin));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVideoPair[]> {
   return this.videoService.list().pipe(
     mergeMap(videos =>
       forkJoin(
         videos.map(
           video => this.youtubeService.get(video.id).pipe(map(youtubeResponse => {
             return {video, youtube: youtubeResponse.items[0]};
           }))
         )
       )
     )
    );
  }

}
