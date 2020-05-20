import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './application-register.component.html'
})
export class ApplicationRegisterComponent {
  public images: string[];

  constructor() {
    this.images = [
      'assets/img/banner/1.png'
    ];
  }
}
