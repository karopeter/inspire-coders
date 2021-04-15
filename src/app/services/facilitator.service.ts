import { Injectable } from '@angular/core';
import { Facilitator } from '../models/facilitator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const  facilitatorUrl = 'http://coders150321-001-site1.itempurl.com';

@Injectable({
  providedIn: 'root'
})
export class FacilitatorService {
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json'})
 };

  constructor(private http: HttpClient) {}

  getAllFacilitator(page: number, pageSize: number): Observable<Facilitator[]> {
    return this.http.get<Facilitator[]>(`${facilitatorUrl}/api/Facilitator/${page}/${pageSize}`).pipe(
      tap((data) => {
        console.log('Facilitator', JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  addFacilitator(newFacilitator: Facilitator): Observable<any> {
      return this.http.post(`${facilitatorUrl}/api/Facilitator`, newFacilitator, {responseType: 'text'});
  }

   private handleError(err: any): Observable<never> {
     let errorMessage: string;
     console.log(err);
     if (err.error instanceof ErrorEvent) {
       errorMessage = 'Something went wrong';
     } else {
       errorMessage = 'error from server';
     }
     return throwError(errorMessage);
  }
}
