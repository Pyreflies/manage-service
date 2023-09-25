import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent {
  constructor(public sidebarService: SidebarService) {} 
  isDarkMode = false;
  isHidden = false;

  toggleSidebar(): void {
    //this.isHidden = !this.isHidden;
    this.sidebarService._toggleSidebar();
    
  }

  setToggleSidebar(check:boolean): void {
    //this.isHidden = check;
    this.sidebarService._setToggleSidebar();
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
  
  logout() {
    // Add your logout logic here
  }
}
