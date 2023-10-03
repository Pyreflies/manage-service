import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
    private permissionSubject = new BehaviorSubject<boolean | null>(null);

    setDisable() {
        this.permissionSubject.next(true);
    }
    setActivate() {
        this.permissionSubject.next(false);
    }

    getPermission(): Observable<boolean | null> {
      return this.permissionSubject.asObservable();
    }

   
}
