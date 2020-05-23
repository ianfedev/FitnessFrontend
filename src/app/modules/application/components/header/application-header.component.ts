import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {NavigationEnd, Router} from '@angular/router';
import {IUser} from '../../../../models/IUser';
import {forkJoin, from} from 'rxjs';
import {GroupService} from '../../../../services/group.service';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './application-header.component.html'
})
export class ApplicationHeaderComponent implements OnInit {

  @Input() hidden: boolean;
  @Input() logged: boolean;
  public user: IUser;
  public houseKeeper: boolean;
  public headerCollapsed: boolean;

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private router: Router
  ) {
    this.user = {name: ''} as IUser;
    this.hidden = false;
    this.houseKeeper = false;
    this.logged = false;
    this.headerCollapsed = true;
  }

  ngOnInit(): void {
    this.updateHeader();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { this.updateHeader(); }
    });
  }

  updateHeader(): void {
    const logged: boolean = this.userService.getToken() !== '';
    this.logged = logged;
    if (logged) {
      this.userService.get().pipe(
        mergeMap(user =>
          forkJoin([from(this.groupService.permissions())]).pipe(
            map(response => ({
                user,
                permissions: response[0]
              })
            )
          )
        )
      ).subscribe(
        response => {
          this.user = response.user;
          this.houseKeeper = response.permissions.admin;
        },

        error => {
          this.logout();
        }
      );
    }
  }

  logout(): void {
    this.logged = false;
    localStorage.clear();
    this.router.navigate(['/']);
    this.user = null;
  }

}
