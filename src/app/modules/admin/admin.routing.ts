import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUserListComponent} from './components/user-list/admin-user-list.component';
import {AdminUserEditComponent} from './components/user-edit/admin-user-edit.component';
import {AdminGroupEditComponent} from './components/group-edit/admin-group-edit.component';
import {AdminGroupListComponent} from './components/group-list/admin-group-list.component';
import {AdminCategoryEditComponent} from './components/category-edit/admin-category-edit.component';
import {AdminCategoryListComponent} from './components/category-list/admin-category-list.component';
import {AdminVideoEditComponent} from './components/video-edit/admin-video-edit.component';
import {AdminVideoListComponent} from './components/video-list/admin-video-list.component';
import {AdminCategoryListGuard} from './guards/admin-category-list.guard';
import {AdminCategoryEditGuard} from './guards/admin-category-edit.guard';
import {AdminVideoEditGuard} from './guards/admin-video-edit.guard';
import {AdminUserListGuard} from './guards/admin-user-list.guard';
import {AdminUserEditGuard} from './guards/admin-user-edit.guard';
import {AdminGroupListGuard} from './guards/admin-group-list.guard';
import {AdminGroupEditGuard} from './guards/admin-group-edit.guard';
import {AdminVideoListGuard} from './guards/admin-video-list.guard';


const routes: Routes = [
  {path: 'group/edit/:id', component: AdminGroupEditComponent,
    canActivate: [AdminGroupEditGuard], resolve: {AdminGroupEditGuard}
  },
  {path: 'group/create', component: AdminGroupEditComponent,
    canActivate: [AdminGroupListGuard]
  },
  {path: 'user/edit/:id', component: AdminUserEditComponent,
    canActivate: [AdminUserEditGuard], resolve: {AdminUserEditGuard}
  },
  {path: 'video/edit/:id', component: AdminVideoEditComponent,
    canActivate: [AdminVideoEditGuard], resolve: {AdminVideoEditGuard}
  },
  {path: 'video/create', component: AdminVideoEditComponent,
    canActivate: [AdminVideoEditGuard], resolve: {AdminVideoEditGuard}
  },
  {path: 'category/edit/:id', component: AdminCategoryEditComponent,
    canActivate: [AdminCategoryEditGuard], resolve: {AdminCategoryEditGuard}},
  {path: 'category/create', component: AdminCategoryEditComponent, canActivate: [AdminCategoryEditGuard]},
  {path: 'categories', component: AdminCategoryListComponent, resolve: {AdminCategoryListGuard}},
  {path: 'videos',  component: AdminVideoListComponent, canActivate: [AdminVideoListGuard], resolve: {AdminVideoListGuard}},
  {path: 'groups', component: AdminGroupListComponent,
    canActivate: [AdminGroupListGuard], resolve: {AdminGroupListGuard}
  },
  {path: 'users', component: AdminUserListComponent,
    canActivate: [AdminUserListGuard], resolve: {AdminUserListGuard}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
