import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {ICategory} from '../models/ICategory';
import {GLOBAL} from './global';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  public create(body: ICategory): Observable<ICategory> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.post(GLOBAL.url + 'categories/create/', body, {headers}) as Observable<ICategory>;
  }

  public list(): Observable<ICategory[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get(GLOBAL.url + 'categories/list/', {headers}) as Observable<ICategory[]>;
  }

  public get(id: string): Observable<ICategory> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get(GLOBAL.url + 'categories/get/' + id + '/', {headers}) as Observable<ICategory>;
  }

  public update(body: ICategory): Observable<ICategory> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.put(GLOBAL.url + 'categories/update/' + body.id + '/', body, {headers}) as Observable<ICategory>;
  }

  public delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.delete(GLOBAL.url + 'categories/delete/' + id + '/', {headers});
  }

}
