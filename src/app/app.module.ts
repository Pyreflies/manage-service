import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './pages/app-sidebar/app-sidebar.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ValidationService } from './services/validate.service';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { TabComponent } from './pages/tab/tab.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    UsersComponent,
    GroupsComponent,
    NavigationComponent,
    TabsComponent,
    TabComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
