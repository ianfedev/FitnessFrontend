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


const routes: Routes = [
  {path: 'group/edit', component: AdminGroupEditComponent},
  {path: 'user/edit', component: AdminUserEditComponent},
  {path: 'video/edit', component: AdminVideoEditComponent,
    canActivate: [AdminVideoEditGuard], resolve: {AdminVideoEditGuard}
  },
  {path: 'video/create', component: AdminVideoEditComponent,
    canActivate: [AdminVideoEditGuard], resolve: {AdminVideoEditGuard}
  },
  {path: 'category/edit/:id', component: AdminCategoryEditComponent,
    canActivate: [AdminCategoryEditGuard], resolve: {AdminCategoryEditGuard}},
  {path: 'category/create', component: AdminCategoryEditComponent, canActivate: [AdminCategoryEditGuard]},
  {path: 'categories', component: AdminCategoryListComponent, resolve: {AdminCategoryListGuard}},
  {path: 'videos',  component: AdminVideoListComponent},
  {path: 'groups', component: AdminGroupListComponent},
  {path: 'users', component: AdminUserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
