import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICategory} from '../../../../models/ICategory';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html'
})
export class AdminCategoryEditComponent implements OnInit {

  public category: ICategory;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.category = {name: ''} as ICategory;
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url[1].path === 'edit') {
      this.activatedRoute.data.subscribe(data => {
        this.category = data.AdminCategoryEditGuard;
      });
    }
  }

  public alterRequest(): void {
    this.categoryService.update(this.category.id + '', this.category).subscribe(
      category => {
        this.router.navigate(['/admin/categories']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
