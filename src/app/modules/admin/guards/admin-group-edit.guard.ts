import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from '@angular/router';
import {GroupService} from '../../../services/group.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ICategory} from '../../../models/ICategory';
import {CategoryService} from '../../../services/category.service';
import {IGroup} from '../../../models/IGroup';

@Injectable()
export class AdminGroupEditGuard implements CanActivate, Resolve<IGroup> {

  constructor(
    private groupService: GroupService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.groupService.permissions().pipe(map(permission => permission.admin));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGroup> {
    return this.groupService.get(route.params.id).pipe(map(group => group));
  }

}
