import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from '@angular/router';
import {GroupService} from '../../../services/group.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {IUser} from '../../../models/IUser';

@Injectable()
export class AdminUserEditGuard implements CanActivate, Resolve<IUser> {

  constructor(
    private groupService: GroupService,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.groupService.permissions().pipe(map(permission => permission.admin));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return this.userService.get(route.params.id).pipe(map(users => users));
  }

}
