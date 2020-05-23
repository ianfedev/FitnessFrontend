import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public branding: boolean;
  public brandFreeRoutes: string[];
  public title: string;

  constructor(
    private router: Router
  ) {
    this.title = 'FitnessApp';
    this.branding = true;
    this.brandFreeRoutes = ['/login', '/register'];
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.branding = !this.brandFreeRoutes.includes(event.url);
      }
    });
  }


}
