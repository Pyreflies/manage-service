import { Component } from '@angular/core';
import { Users,_user } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/cservice/user.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  constructor(public sweetAlertService: SweetAlertService,private userService: UserService) { }
  users = _user;
  // Placeholder for users data
  usersBase: Users[] = this.users;
  selectedUser: Users[] = this.users; // Placeholder for the selected user
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  sortedColumn: keyof Users | null = null;
  isAscending = true;

  search(): void {
    if (this.searchQuery) {
      this.users = this.users.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase().trim()) || user.email.toLowerCase().includes(this.searchQuery.toLowerCase().trim()));
    } else {
      this.users = this.usersBase //this.userService.getUsers();
    }
    this.currentPage = 1; // Reset to first page after search
  }
  clear(): void{
    this.searchQuery = ""; 
    this.users = this.usersBase;
  }
  // get paginatedUsers(): any[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.users.slice(startIndex, endIndex);
  // }
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
  // sort data
  sortBy(column: keyof Users) {
    if (this.sortedColumn === column) {
      this.isAscending = !this.isAscending;
    } else {
      this.sortedColumn = column;
      this.isAscending = true;
    }

    // Sort the users array based on the selected column and direction
    this.users.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      return this.isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
  }
  setUser(id :string) : void{
    this.userService.setUserId(id);
  }
  // Create a new user
  createUser() {
    // Implement create logic
  }

  // Edit a user
  editUser(user: keyof Users) {
   // this.selectedUser = user;
  }

  // Update a user
  updateUser() {
    // Implement update logic
    //this.selectedUser = null;
  }

  // Delete a user
  deleteUser(user: any) {
    // Implement delete logic
  }
}
