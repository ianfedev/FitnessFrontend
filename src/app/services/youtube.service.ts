import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IYouTubeResponse} from '../models/youtube/IYouTubeResponse';

@Injectable()
export class YoutubeService {

  constructor(
    private http: HttpClient
  ) {}

  public get(id: string): Observable<IYouTubeResponse> {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=' + id + '&key=AIzaSyBxdiHBmpnmoLIKVJtvtiLry59HU-5nUDk') as Observable<IYouTubeResponse>;
  }

}
