import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {IVideoHome, IVideoPair} from '../../../models/IVideo';
import {VideoService} from '../../../services/video.service';
import {YoutubeService} from '../../../services/youtube.service';

@Injectable()
export class ApplicationHomeGuard implements Resolve<IVideoHome> {

  constructor(
    private videoService: VideoService,
    private youtubeService: YoutubeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVideoHome> {
    return this.getFormattedVideos({}).pipe(
      mergeMap(response =>
        forkJoin(
          [this.getFormattedVideos({}), this.getFormattedVideos({})]
        ).pipe(
          map(queries => {
            return {
              first: response,
              second: queries[0],
              third: queries[1]
            } as IVideoHome;
          })
        )
      )
    );
  }

  getFormattedVideos(query: any): Observable<IVideoPair[]> {
    return this.videoService.list(query).pipe(
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
