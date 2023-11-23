import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contacts`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getContactById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/contacts/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  addContact(contact: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/contacts`, contact, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateContact(id: number, contact: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/contacts/${id}`, contact, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/contacts/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
}