import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPermissions} from '../models/IPermissions';
import {UserService} from './user.service';
import {ICategory} from '../models/ICategory';
import {IGroup} from '../models/IGroup';
import {GLOBAL} from './global';

@Injectable()
export class GroupService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  public permissions(): Observable<IPermissions> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.post('http://www.mocky.io/v2/5ec8a2752f00001744db7066', {headers}) as Observable<IPermissions>;
  }

  public create(body: ICategory): Observable<IGroup> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.post(GLOBAL.url + 'api/groups/create/', body, {headers}) as Observable<IGroup>;
  }

  public list(): Observable<IGroup[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get(GLOBAL.url + 'api/groups/list/', {headers}) as Observable<IGroup[]>;
  }

  public get(id: string): Observable<IGroup> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get(GLOBAL.url + 'api/groups/get/' + id + '/', {headers}) as Observable<IGroup>;
  }

  public update(body: IGroup): Observable<IGroup> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.put(GLOBAL.url + 'api/groups/update/' + body.id + '/', body, {headers}) as Observable<IGroup>;
  }

  public delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.delete(GLOBAL.url + 'api/groups/delete/' + id + '/', {headers});
  }

}
