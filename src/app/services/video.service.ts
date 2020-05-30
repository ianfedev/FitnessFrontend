import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {IVideo, IVideoCreation} from '../models/IVideo';
import {GLOBAL} from './global';

@Injectable()
export class VideoService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  public create(body: IVideoCreation): Observable<IVideo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.post(GLOBAL.url + 'videos/create/', body, {headers}) as Observable<IVideo>;
  }

  public list(query?: any): Observable<IVideo[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get(GLOBAL.url + 'videos/list/', {headers}) as Observable<IVideo[]>;
  }

  public get(id: string): Observable<IVideo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get(GLOBAL.url + 'videos/get/' + id + '/', {headers}) as Observable<IVideo>;
  }

  public update(body: IVideoCreation): Observable<IVideo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.put(GLOBAL.url + 'videos/update/' + body.id + '/', body, {headers}) as Observable<IVideo>;
  }

  public delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.delete(GLOBAL.url + 'videos/delete/' + id + '/', {headers});
  }

}
