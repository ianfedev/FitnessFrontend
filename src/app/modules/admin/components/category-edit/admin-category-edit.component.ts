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
  public title: string;
  public edit: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.title = 'Crear categoría';
    this.edit = false;
    this.category = {id: 0, name: ''};
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url[1].path === 'edit') {
      this.activatedRoute.data.subscribe(data => {
        this.category = data.AdminCategoryEditGuard;
      });
      this.title = 'Editar categoría ' + this.category.name;
      this.edit = true;
    }
  }

  public alterRequest(): void {
    if (this.edit) {
      this.categoryService.update(this.category).subscribe(
        category => {
          this.router.navigate(['/admin/categories']);
        },

        error => {
          console.log(error);
        }
      );
    } else {
      this.categoryService.create(this.category).subscribe(
        category => {
          this.router.navigate(['/admin/categories']);
        },

        error => {
          console.log(error);
        }
      );
    }
  }

}
