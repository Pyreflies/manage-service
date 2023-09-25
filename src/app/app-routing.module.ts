import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { RolesComponent } from './components/roles/roles.component';
import { RoleDetailComponent } from './components/roles/role-detail/role-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersComponent, data: { title: 'Users' }  }, 
  { path: 'users/users-setting', component: UserDetailComponent, data: { title: 'Detail' }  }, 
  { path: 'users/users-setting/:id', component: UserDetailComponent },

  { path: 'roles', component: RolesComponent, data: { title: 'Roles' }  }, 
  { path: 'roles/roles-setting', component: RoleDetailComponent, data: { title: 'Detail' }  }, 

  { path: 'groups', component: GroupsComponent , data: { title: 'Groups' } }, 

  // Add more routes here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
