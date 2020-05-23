import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GroupService} from '../../../services/group.service';
import {map} from 'rxjs/operators';
import {IPermissions} from '../../../models/IPermissions';

@Injectable()
export class ApplicationPermissionsGuard implements Resolve<IPermissions> {

  constructor(
    private groupService: GroupService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPermissions> {
    return this.groupService.permissions().pipe(map(permissions => permissions));
  }

}
