import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPermissions} from '../../../../models/IPermissions';
import {IUser} from '../../../../models/IUser';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html'
})
export class UserAccountComponent implements OnInit {

  public permissions: IPermissions;
  public user: IUser;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.permissions = data.ApplicationPermissionsGuard;
      this.user = data.UserAccountGuard;
    });
  }

}
