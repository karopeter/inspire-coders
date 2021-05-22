import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

const authUrl = 'http://tocoder-001-site1.itempurl.com';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
     return this.http.post<AuthResponseData>
     (`${authUrl}/api/Account/signup`, data, this.httpOptions).pipe(catchError(this.handleError), tap(resData => {
       console.log(resData);
       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
     }));
  }

  login(username: string, password: string) {
    return this.http.post<AuthResponseData>(`${authUrl}/api/Account/login`,
    {
    username: username,
    password: password,
    returnSecureToken: true
  }, this.httpOptions).pipe(catchError(this.handleError), tap(resData => {
       console.log(resData);
       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }


  autoLogin(): void {
    const userData: {
      email: string;
      id: string;
      token: string;
      tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData.token, new Date(userData.tokenExpirationDate));

    if (loadedUser) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
    }
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
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
