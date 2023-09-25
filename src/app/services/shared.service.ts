// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isHiddenSubject = new BehaviorSubject<boolean>(false);
  isHidden$ = this.isHiddenSubject.asObservable();

  _toggleSidebar() {
    this.isHiddenSubject.next(!this.isHiddenSubject.value);
  }

  _setToggleSidebar() {
    this.isHiddenSubject.next(false);
  }
}
