import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {IVideo} from '../models/IVideo';

@Injectable()
export class VideoService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  public create(body: IVideo): Observable<IVideo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.post('http://www.mocky.io/v2/5ed093d63500008d00ff9d05', body, {headers}) as Observable<IVideo>;
  }

  public list(query?: any): Observable<IVideo[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get('http://www.mocky.io/v2/5ed094483500009300ff9d07', {headers}) as Observable<IVideo[]>;
  }

  public get(id: string): Observable<IVideo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get('http://www.mocky.io/v2/5ed093d63500008d00ff9d05', {headers}) as Observable<IVideo>;
  }

  public update(id: string, body: IVideo): Observable<IVideo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.put('http://www.mocky.io/v2/5ed093d63500008d00ff9d05', body, {headers}) as Observable<IVideo>;
  }

  public delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.delete('http://www.mocky.io/v2/5ed093d63500008d00ff9d05', {headers});
  }

}
