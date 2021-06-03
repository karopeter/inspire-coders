import { Injectable } from '@angular/core';
import { Forum } from '../models/forum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const forumUrl  = 'http://tocoder-001-site1.itempurl.com';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  forumsChanged = new Subject<Forum[]>();
  startedEditing = new Subject<number>();
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json'})
 };

  constructor(private http: HttpClient) { }

  getAllForum(page: number, pageSize: number): Observable<Forum[]> {
       return this.http.get<Forum[]>(`${forumUrl}/api/Forum/${page}/${pageSize}`).pipe(
        tap((data) => {
          console.log('Forum', JSON.stringify(data));
        }),
        catchError(this.handleError)
       );
  }

  addForum(newForum: Forum): Observable<any> {
      return this.http.post(`${forumUrl}/api/Forum`, newForum, {responseType: 'text'});
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
