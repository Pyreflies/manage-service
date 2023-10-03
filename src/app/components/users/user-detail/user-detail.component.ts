import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/cservice/user.service';
import { Users, _user } from 'src/app/models/users.model';
import { Roles, _roles } from 'src/app/models/roles.models';
import { PermissionService } from 'src/app/services/pservice/Permission.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  usersBase: Users[] = _user;
  status = 'A';
  name = '';
  email = '';
  selectedRoleCode: string = '';
  roles: Roles[] = _roles;
  activeAction : string | boolean = 'false';

  constructor(private userService: UserService,private permissionService : PermissionService) {}

  async ngOnInit(): Promise<void> {
    try {
      const setUser =  this.userService.getUserId().subscribe((userId) => {
        console.log(userId);
        if (userId) {
          const setUser = this.usersBase.find(user => user.id === userId);
          if (setUser) {
            this.name = setUser.name;
            this.email = setUser.email;
            this.status = setUser.status;
            // this.role.find(code => code.code = setUser.roleCode) 
            this.selectedRoleCode = setUser.roleCode;
          }
        }else{
          this.clearSetUser();
        }
      });
      setUser.unsubscribe();

      const perm = this.permissionService.getPermission().subscribe((perm) => {
        this.activeAction = String(perm);
      });
      perm.unsubscribe();


    } catch (error) {
      console.log(error);
    }
  }
  async clearSetUser(): Promise<void> {
    this.name = '';
    this.email = '';
    this.status = 'A';
    this.selectedRoleCode = 'selected';
  }
}
