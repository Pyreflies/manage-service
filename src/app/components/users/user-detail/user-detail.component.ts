import { Component, OnInit } from '@angular/core';
import { Roles, _roles } from 'src/app/models/roles.models';
import { UserService } from 'src/app/services/cservice/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService) { }

  status: string = 'A';
  name: string = '';
  email: string = '';

  roles = _roles;


  ngOnInit(): void {
    // Get the user id parameter from the route
    this.userService.getUserId().subscribe((userId) => {
      if (userId) {
        // Use the userId here
        console.log("asd",userId);
        this.userService.clearUserId(); 
        console.log("dd",userId);
      }
  

    });

    // Now you can use this.userId in your component to fetch user details or perform other actions.
  }
}
