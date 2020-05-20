import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './application-header.component.html'
})
export class ApplicationHeaderComponent {

  @Input() hidden: boolean;

  constructor() {
    this.hidden = false;
  }

}
