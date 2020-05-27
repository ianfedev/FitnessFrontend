import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {ICategory} from '../models/ICategory';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  public create(body: ICategory): Observable<ICategory> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.post('http://www.mocky.io/v2/5ec9c7133000009700a6ce76', body, {headers}) as Observable<ICategory>;
  }

  public list(): Observable<ICategory[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get('http://www.mocky.io/v2/5ec9c6e73000005b00a6ce74', {headers}) as Observable<ICategory[]>;
  }

  public get(id: string): Observable<ICategory> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.get('http://www.mocky.io/v2/5ec9c7133000009700a6ce76', {headers}) as Observable<ICategory>;
  }

  public update(id: string, body: ICategory): Observable<ICategory> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.put('http://www.mocky.io/v2/5ec9c7133000009700a6ce76', body, {headers}) as Observable<ICategory>;
  }

  public delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.userService.getToken());
    return this.http.delete('http://www.mocky.io/v2/5ec9c7133000009700a6ce76', {headers});
  }

}
