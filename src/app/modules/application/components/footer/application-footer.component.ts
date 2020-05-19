import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './application-footer.component.html'
})
export class ApplicationFooterComponent {
  public date: Date;

  constructor() {
    this.date = new Date();
  }
}
