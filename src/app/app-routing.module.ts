import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserListComponent} from './components/user-list/user-list.component'
import {UserFormComponent} from './components/user-form/user-form.component'

const routes: Routes = [
  {
    path:'/',
    component:UserListComponent,
  },
  {
    path:'users',
    component: UserListComponent,
  },
  {
    path:'users/create',
    component: UserFormComponent
  },
  {
    path: 'users/:id',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
