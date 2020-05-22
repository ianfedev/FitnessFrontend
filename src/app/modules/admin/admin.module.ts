import { NgModule } from '@angular/core';
import {AdminRouting} from './admin.routing';
import {AdminUserListComponent} from './components/user-list/admin-user-list.component';
import {CommonModule} from '@angular/common';
import {AdminNavigationComponent} from './components/navigation/admin-navigation.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminUserEditComponent} from './components/user-edit/admin-user-edit.component';
import {AdminGroupEditComponent} from './components/group-edit/admin-group-edit.component';
import {AdminGroupListComponent} from './components/group-list/admin-group-list.component';
import {AdminCategoryEditComponent} from './components/category-edit/admin-category-edit.component';
import {AdminCategoryListComponent} from './components/category-list/admin-category-list.component';
import {AdminVideoEditComponent} from './components/video-edit/admin-video-edit.component';
import {AdminVideoListComponent} from './components/video-list/admin-video-list.component';

@NgModule({
  declarations: [
    AdminUserListComponent,
    AdminUserEditComponent,
    AdminGroupEditComponent,
    AdminGroupListComponent,
    AdminCategoryEditComponent,
    AdminCategoryListComponent,
    AdminVideoEditComponent,
    AdminVideoListComponent,
    AdminNavigationComponent
  ],
  exports: [
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    NgbDropdownModule
  ]
})
export class AdminModule { }
