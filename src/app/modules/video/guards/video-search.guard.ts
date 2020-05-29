import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {VideoService} from '../../../services/video.service';
import {YoutubeService} from '../../../services/youtube.service';
import {IVideoPair} from '../../../models/IVideo';

@Injectable()
export class VideoSearchGuard implements Resolve<IVideoPair[]> {

  constructor(
    private videoService: VideoService,
    private youtubeService: YoutubeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVideoPair[]> {
   return this.videoService.list(route.queryParams).pipe(
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
