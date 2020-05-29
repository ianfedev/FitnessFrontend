import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../../../models/IUser';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html'
})
export class AdminUserListComponent implements OnInit {

  public users: IUser[];

  constructor(
    private routeSnapshot: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.users = {} as IUser[];
  }

  ngOnInit(): void {
    this.routeSnapshot.data.subscribe(
      data => {
        this.users = data.AdminUserListGuard;
      }
    );
  }

  deleteUser(id: string): void {
    this.userService.delete(id).subscribe(
      user => {
        this.router.navigate(['/admin/users']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
