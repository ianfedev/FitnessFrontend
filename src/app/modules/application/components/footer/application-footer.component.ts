import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './application-footer.component.html'
})
export class ApplicationFooterComponent {
  public date: Date;
  @Input() hidden: boolean;

  constructor() {
    this.date = new Date();
    this.hidden = false;
  }
}
