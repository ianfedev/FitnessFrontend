import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICategory} from '../../../../models/ICategory';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html'
})
export class AdminCategoryListComponent implements OnInit {

  public categories: ICategory[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.categories = data.AdminCategoryListGuard;
      }
    );
  }

}
