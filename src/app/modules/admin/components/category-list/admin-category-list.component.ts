import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICategory} from '../../../../models/ICategory';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html'
})
export class AdminCategoryListComponent implements OnInit {

  public categories: ICategory[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.categories = data.AdminCategoryListGuard;
      }
    );
  }

  deleteCategory(id: string): void {
    this.categoryService.delete(id).subscribe(
      category => {
        this.router.navigate(['/admin/categories']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
