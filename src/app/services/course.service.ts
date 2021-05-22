import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const  courseUrl = 'http://tocoder-001-site1.itempurl.com';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  httpOptions = {
     headers: new HttpHeaders({ 'content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllCourse(page: number, pageSize: number): Observable<Course[]> {
     return this.http.get<Course[]>(`${courseUrl}​/api​/Course​/${page}​/${pageSize}`).pipe(
      tap((data) => {
        console.log('Course', JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  addCourse(newCourse: Course): Observable<any> {
    return this.http.post(`${courseUrl}/api/Course`, newCourse, {responseType: 'text'});
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
