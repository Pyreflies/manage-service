import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private userIdSubject = new BehaviorSubject<string | null>(null);

    setUserId(userId: string) {
      this.userIdSubject.next(userId);
    }
  
    getUserId(): Observable<string | null> {
      return this.userIdSubject.asObservable();
    }

    clearUserId() {
      this.userIdSubject.next(null);
    }
}
