import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {RouterModule, Routes} from "@angular/router";
import { UserAddComponent } from './user-add/user-add.component';

const route: Routes = [
  { path: '', component: UserListComponent},
  { path: 'add', component: UserAddComponent},
];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UsersModule { }
