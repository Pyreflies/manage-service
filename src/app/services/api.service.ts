import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error(`Something went wrong, please try again later.`));
  }

  private makeRequest<T>(method: string, endpoint: string, data?: any): Observable<T> {
    const url = `${environment.config.apiUrl}/${endpoint}`;
    const headers = new HttpHeaders(); // You can set headers here if needed
    // debugger;
    switch (method) {
      case 'GET':
        return this.http.get<T>(url, { headers }).pipe(catchError(this.handleError));
      case 'POST':
        return this.http.post<T>(url, data, { headers }).pipe(catchError(this.handleError));
      case 'PUT':
        return this.http.put<T>(url, data, { headers }).pipe(catchError(this.handleError));
      case 'PATCH':
        return this.http.patch<T>(url, data, { headers }).pipe(catchError(this.handleError));
      case 'DELETE':
        return this.http.delete<T>(url, { headers }).pipe(catchError(this.handleError));
      default:
        return throwError('Invalid HTTP method.');
    }
  }

  public get<T>(endpoint: string): Observable<T> {
    return this.makeRequest<T>('GET', endpoint);
  }

  public getByID<T>(endpoint: string): Observable<T> {
    return this.makeRequest<T>('GET', endpoint);
  }

  public post<T>(data: any, endpoint: string): Observable<T> {
    return this.makeRequest<T>('POST', endpoint, data);
  }

  public put<T>(data: any, endpoint: string): Observable<T> {
    return this.makeRequest<T>('PUT', endpoint, data);
  }

  public patch<T>(data: any, endpoint: string): Observable<T> {
    return this.makeRequest<T>('PATCH', endpoint, data);
  }

  public delete<T>(data: any, endpoint: string): Observable<T> {
    return this.makeRequest<T>('DELETE', endpoint, data);
  }

  // Add other HTTP methods (e.g., PUT, DELETE, etc.) as needed
}
