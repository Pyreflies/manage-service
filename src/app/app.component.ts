import { Component } from '@angular/core';
import { SidebarService } from './services/shared.service'; // Import the service
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public sidebarService: SidebarService) {}
  title = 'management-ui';
  
  isHidden = false; // Define and initialize the isHidden property here

  toggleSidebar() {
    this.sidebarService._setToggleSidebar();
  }
}
