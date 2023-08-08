import { Injectable } from '@angular/core';
import { SweetAlertService } from './sweet-alert.service';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(private sweetAlertService: SweetAlertService) {}

  isEmpty(value: string, errorMessage: string): boolean {
    if (!value || value.trim().length === 0) {
      this.sweetAlertService.error('Error!', errorMessage);
      return true;
    }
    return false;
  }

  // You can add more validation methods as needed
}
