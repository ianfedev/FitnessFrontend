import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILoginTokenization, ILoginRequest, IUser} from '../models/IUser';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public register(register: ILoginRequest): Observable<ILoginTokenization> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://www.mocky.io/v2/5ec883752f00004c00db700a', register, {headers}) as Observable<ILoginTokenization>;
  }

  public login(login: ILoginRequest): Observable<ILoginTokenization> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://www.mocky.io/v2/5ec883752f00004c00db700a', login, {headers}) as Observable<ILoginTokenization>;
  }

  public get(id?: string): Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    if (id) { return this.http.post('http://www.mocky.io/v2/5ec897702f00004c00db7057', {headers}) as Observable<IUser>; }
    return this.http.get('http://www.mocky.io/v2/5ec897702f00004c00db7057', {headers}) as Observable<IUser>;
  }

  public update(id: string, user: IUser): Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.http.post('http://www.mocky.io/v2/5ec897702f00004c00db7057', {headers}) as Observable<IUser>;
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
    return localStorage.getItem('token');
  }

}
