import { Component } from '@angular/core';
import { Roles, _roles } from 'src/app/models/roles.models';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  constructor(public sweetAlertService: SweetAlertService) { }
  roles = _roles;
  rolesBase: Roles[] = this.roles;
  selectedUser: any = null; // Placeholder for the selected user
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  search(): void {
    if (this.searchQuery) {
      this.roles = this.roles.filter(roles => roles.id.toLowerCase().includes(this.searchQuery.toLowerCase()));
    } else {
      this.roles = this.rolesBase //this.userService.getUsers();
    }
    this.currentPage = 1; // Reset to first page after search
  }

  delete() {
    this.sweetAlertService.confirm({
      title: 'Warning',
      text: 'Are you sure you want to delete'
    }
    ).then((result) => {
      if (result.isConfirmed) {
        this.sweetAlertService.success('Successfully deleted', 'Your data has been deleted')
      }
    })
  }
}
