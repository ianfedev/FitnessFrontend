import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IVideoHome} from '../../../../models/IVideo';
import {ApplicationHomeGuard} from '../../guards/application-home.guard';

@Component({
  selector: 'app-home',
  templateUrl: './application-home.component.html'
})
export class ApplicationHomeComponent implements OnInit{

  public images: string[];
  public videos: IVideoHome;

  constructor(
    private route: ActivatedRoute
  ) {
    this.images = [
      'assets/img/banner/1.png'
    ];
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.videos = data.ApplicationHomeGuard;
    });
  }


}
