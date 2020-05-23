import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ILoginRequest} from '../../../../models/IUser';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './application-login.component.html'
})
export class ApplicationLoginComponent {

  public images: string[];
  public request: ILoginRequest;
  public registering: boolean;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.request = {email: '', password: ''};
    this.registering = this.routeSnapshot.snapshot.url[0].path === 'register';
    this.images = [
      'assets/img/banner/1.png'
    ];
  }

  loginRequest(): void {
    this.userService.login(this.request).subscribe(
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
