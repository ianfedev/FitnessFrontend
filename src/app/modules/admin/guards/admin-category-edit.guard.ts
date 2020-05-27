import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from '@angular/router';
import {GroupService} from '../../../services/group.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ICategory} from '../../../models/ICategory';
import {CategoryService} from '../../../services/category.service';

@Injectable()
export class AdminCategoryEditGuard implements CanActivate, Resolve<ICategory> {

  constructor(
    private groupService: GroupService,
    private categoryService: CategoryService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.groupService.permissions().pipe(map(permission => permission.admin));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategory> {
    return this.categoryService.get(route.params.id).pipe(map(categories => categories));
  }

}
