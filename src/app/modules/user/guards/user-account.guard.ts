import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';
import {IUser} from '../../../models/IUser';
import {map} from 'rxjs/operators';

@Injectable()
export class UserAccountGuard implements Resolve<IUser> {

  constructor(
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return this.userService.get().pipe(map(user => user));
  }

}
