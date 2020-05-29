import {Component, OnInit} from '@angular/core';
import {ICategory} from '../../../../models/ICategory';
import {ActivatedRoute, Router} from '@angular/router';
import {IGroup} from '../../../../models/IGroup';
import {GroupService} from '../../../../services/group.service';

@Component({
  selector: 'app-admin-group-list',
  templateUrl: './admin-group-list.component.html'
})
export class AdminGroupListComponent implements OnInit {

  public groups: IGroup[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private groupService: GroupService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.groups = data.AdminGroupListGuard;
      }
    );
  }

  deleteGroup(id: string): void {
    this.groupService.delete(id).subscribe(
      user => {
        this.router.navigate(['/admin/users']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
