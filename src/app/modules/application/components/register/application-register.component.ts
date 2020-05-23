import { Component } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {IUser} from '../../../../models/IUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './application-register.component.html'
})
export class ApplicationRegisterComponent {
  public images: string[];
  public request: IUser;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.request = {} as IUser;
    this.images = [
      'assets/img/banner/1.png'
    ];
  }

  registerRequest(): void {
    this.userService.register(this.request).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },

      error => {
        console.log(error);
      }
    );
  }
}
