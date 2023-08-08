import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}

  // Show a simple alert
  alert(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return Swal.fire({
        ...options,
    });
  }

  // Show a confirmation dialog
  confirm(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return Swal.fire({
      ...options,
      icon: 'warning',
      showCancelButton: true,
    });
  }

  // Show an error alert
  error(title: string, text: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'error',
      title,
      text,
    });
  }

  // Show a success alert
  success(title: string, text: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'success',
      title,
      text,
    });
  }

  // You can add more methods for different types of SweetAlert modals as needed
}
