import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../../../models/IUser';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html'
})
export class AdminUserEditComponent implements OnInit {

  public user: IUser;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user =  {id: 0, name: '', email: '', password: ''};
  }

  ngOnInit(): void {
    this.routeSnapshot.data.subscribe(
      data => {
        this.user = data.AdminUserEditGuard;
      }
    );
  }

  updateUser(): void {
    this.userService.update(this.user.id + '', this.user).subscribe(
      user => {
        this.router.navigate(['/admin/users']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
