import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './application-login.component.html'
})
export class ApplicationLoginComponent {
  public images: string[];
  public registering: boolean;

  constructor() {
    this.registering = false;
    this.images = [
      'assets/img/banner/1.png'
    ];
  }
}
