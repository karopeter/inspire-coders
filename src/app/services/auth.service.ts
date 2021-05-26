import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Auth } from '../models/auth';
import { Login } from '../models/login';

const authUrl = 'http://tocoder-001-site1.itempurl.com';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private resetToken: string;
  private userId: string;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getResetToken(): void {
    this.resetToken;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

   registerUser(firstName: string, lastName: string, email: string, username: string, password: string) {
     const auth: Auth = {firstName: firstName, lastName: lastName, email: email, username: username, password: password};
     return this.http.post(`${authUrl}/api/Account/signup`, auth, this.httpOptions).pipe(catchError(this.handleError), tap(resData => {
       console.log(resData);
     }));
  }

  login(username: string, password: string) {
    const login: Login = {username: username, password: password };
    return this.http.post<{token: string, expiresIn: number, userId: string }>(`${authUrl}/api/Account/login`, login, this.httpOptions).pipe(catchError(this.handleError), tap(resData => {
       const token = resData.token;
       this.token = token;
      if (token) {
        const expiresInDuration = resData.expiresIn;
        this.isAuthenticated = true;
        this.userId = resData.userId;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() * expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate, this.userId);
        this.router.navigate(['/dashboard']);
      }
    }));
  }

   private saveAuthData(token: string, expirationDate: Date, userId: string) {
     localStorage.setItem('token', token);
     localStorage.setItem('expiration', expirationDate.toISOString());
     localStorage.setItem('userId', userId);
   }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknow error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXIST':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email doest not exists.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
      case 'INVALID_USERNAME':
        errorMessage = 'This username does not exists.';
        break;
    }
    return throwError(errorMessage);
  }
}
