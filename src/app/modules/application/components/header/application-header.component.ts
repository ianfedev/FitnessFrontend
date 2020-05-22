import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './application-header.component.html'
})
export class ApplicationHeaderComponent {

  @Input() hidden: boolean;
  @Input() logged: boolean;
  public headerCollapsed: boolean;

  constructor() {
    this.hidden = false;
    this.logged = true;
    this.headerCollapsed = true;
  }

}
