import { Component } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  constructor(public sweetAlertService: SweetAlertService){}
  users: Users[] = [
    {id: '1', name: 'John Doe', email: 'john@example.com',status : 'Active'},
    {id: '2', name: 'Jame Smith', email: 'jame@example.com',status : 'Inactive'},
    {id: '3', name: 'Helen Coloe', email: 'helen@example.com',status : 'Inactive'},
    {id: '4', name: 'Sky Lorent', email: 'sky@example.com',status : 'Active'},
    {id: '5', name: 'John Doe', email: 'john@example.com',status : 'Active'},
    {id: '6', name: 'Jame Smith', email: 'jame@example.com',status : 'Inactive'},
    {id: '7', name: 'Helen Coloe', email: 'helen@example.com',status : 'Inactive'},
    {id: '8', name: 'Sky Lorent', email: 'sky@example.com',status : 'Active'},
    


  ]; // Placeholder for users data
  usersBase: Users[] = this.users;
  selectedUser: any = null; // Placeholder for the selected user
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  search(): void {
    if (this.searchQuery) {
      this.users = this.users.filter(user =>  user.id.toLowerCase().includes(this.searchQuery.toLowerCase()));
    } else {
      this.users = this.usersBase //this.userService.getUsers();
    }
    this.currentPage = 1; // Reset to first page after search
  }

  // get paginatedUsers(): any[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.users.slice(startIndex, endIndex);
  // }
  delete(){
    this.sweetAlertService.confirm({
      title : 'Warning',
      text : 'Are you sure you want to delete'}
    ).then((result) => {
      if (result.isConfirmed) {
        this.sweetAlertService.success('Successfully deleted','Your data has been deleted')
      }})
  }
  // Create a new user
  createUser() {
    // Implement create logic
  }

  // Edit a user
  editUser(user: any) {
    this.selectedUser = user;
  }

  // Update a user
  updateUser() {
    // Implement update logic
    this.selectedUser = null;
  }

  // Delete a user
  deleteUser(user: any) {
    // Implement delete logic
  }
}
