import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILoginTokenization, ILoginRequest, IUser} from '../models/IUser';
import {Observable} from 'rxjs';
import {GLOBAL} from './global';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public register(register: ILoginRequest): Observable<ILoginTokenization> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(GLOBAL.url + 'user/create/', register, {headers}) as Observable<ILoginTokenization>;
  }

  public login(login: ILoginRequest): Observable<ILoginTokenization> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(GLOBAL.url + 'user/obtain_token/', login, {headers}) as Observable<ILoginTokenization>;
  }

  public get(id?: string): Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    if (id) { return this.http.post(GLOBAL.url + 'get/' + id, {headers}) as Observable<IUser>; }
    return this.http.get(GLOBAL.url + 'user/get/', {headers}) as Observable<IUser>;
  }

  public update(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.http.post(GLOBAL.url + 'user/update/', user, {headers}) as Observable<IUser>;
  }

  public list(page?: string): Observable<IUser[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.http.get('http://www.mocky.io/v2/5ecfe82f320000f1aee3d73a', {headers}) as Observable<IUser[]>;
  }

  public delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.http.delete('http://www.mocky.io/v2/5ecfe82f320000f1aee3d73a', {headers}) as Observable<any>;
  }

  public getToken() {
    if (localStorage.getItem('token') === undefined ||
      localStorage.getItem('token') === null) { return ''; }
    return 'Bearer ' + localStorage.getItem('token');
  }

}
