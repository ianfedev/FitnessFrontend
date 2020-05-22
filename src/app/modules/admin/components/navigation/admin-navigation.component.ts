import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html'
})
export class AdminNavigationComponent {

  @Input() public hidden: boolean;

  constructor() {
    this.hidden = true;
  }

}
