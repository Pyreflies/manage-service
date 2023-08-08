import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    UsersComponent,
    GroupsComponent,
    NavigationComponent,
    UsersListComponent,
    UsersDetailComponent,
    TabsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
