import { NgModule } from '@angular/core';
import {AdminRouting} from './admin.routing';
import {AdminUserListComponent} from './components/user-list/admin-user-list.component';
import {CommonModule} from '@angular/common';
import {AdminNavigationComponent} from './components/navigation/admin-navigation.component';
import {NgbDropdownModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminUserEditComponent} from './components/user-edit/admin-user-edit.component';
import {AdminGroupEditComponent} from './components/group-edit/admin-group-edit.component';
import {AdminGroupListComponent} from './components/group-list/admin-group-list.component';
import {AdminCategoryEditComponent} from './components/category-edit/admin-category-edit.component';
import {AdminCategoryListComponent} from './components/category-list/admin-category-list.component';
import {AdminVideoEditComponent} from './components/video-edit/admin-video-edit.component';
import {AdminVideoListComponent} from './components/video-list/admin-video-list.component';
import {FormsModule} from '@angular/forms';
import {AdminCategoryListGuard} from './guards/admin-category-list.guard';
import {AdminCategoryEditGuard} from './guards/admin-category-edit.guard';
import {AdminVideoEditGuard} from './guards/admin-video-edit.guard';

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
  providers: [
    AdminCategoryListGuard,
    AdminCategoryEditGuard,
    AdminVideoEditGuard
  ],
    imports: [
        CommonModule,
        AdminRouting,
        NgbDropdownModule,
        FormsModule,
        NgbTypeaheadModule
    ]
})
export class AdminModule { }
