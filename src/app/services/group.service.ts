import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPermissions} from '../models/IPermissions';
import {UserService} from './user.service';

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

}
