import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './application-home.component.html'
})
export class ApplicationHomeComponent {

  public images: string[];

  constructor() {
    this.images = [
      'assets/img/banner/1.png'
    ];
  }
}
