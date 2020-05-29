import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IGroup} from '../../../../models/IGroup';
import {GroupService} from '../../../../services/group.service';

@Component({
  selector: 'app-admin-group-edit',
  templateUrl: './admin-group-edit.component.html'
})
export class AdminGroupEditComponent implements OnInit {

  public group: IGroup;
  public title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService,
    private router: Router
  ) {
    this.title = 'Crear grupo';
    this.group = {id: 0, name: '', admin: false, color: ''};
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url[1].path === 'edit') {
      this.activatedRoute.data.subscribe(data => {
        this.group = data.AdminGroupEditGuard;
      });
      this.title = 'Editar grupo ' + this.group.name;
    }
  }

  public alterRequest(): void {
    this.groupService.update(this.group.id + '', this.group).subscribe(
      groups => {
        this.router.navigate(['/admin/groups']);
      },

      error => {
        console.log(error);
      }
    );
  }

}
