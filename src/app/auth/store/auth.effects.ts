import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

const authUrl = 'http://tocoder-001-site1.itempurl.com';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  email: string;
  registered?: boolean;
}

const handleAuthentication = (expiresIn: number, email: string, userId: string, token: string) => {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    return new AuthActions.AuthenticateSuccess({email: email, userId: userId, token: token, expirationDate: expirationDate});
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An uknown error occured';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXIST':
      errorMessage = 'This email exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exits.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct';
      break;
  }
  return of(new AuthActions.AuthenticateFail(errorMessage));
};

@Injectable()
export class AuthEffects {
   @Effect()
   authSignup = this.actions$.pipe(
     ofType(AuthActions.SIGNUP_START),
     switchMap((signupAction: AuthActions.SignupStart) => {
       return this.http.post(`${authUrl}/api/Account/signup`, {
         firstName: signupAction.payload.firstName,
         lastName: signupAction.payload.lastName,
         email: signupAction.payload.email,
         username: signupAction.payload.username,
         password: signupAction.payload.password,
         returnSecureToken: true
       }).pipe(
         map(resData => {
           // ... client side
             return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
         }), catchError(errorRes => {
           // .. server side
           return handleError(errorRes);
         }));
     })
   );


  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>(`${authUrl}/api/Account/login`, {
        username: authData.payload.username,
        password: authData.payload.password,
        returnSecureToken: true
      }).pipe(
        map(resData => {
          // ... client side
          return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
        }), catchError(errorRes => {
          // ... server side
          return handleError(errorRes);
        }));
    })
  );

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(ofType(AuthActions.AUTHENTICATE_SUCCESS), tap(() => {
     this.router.navigate(['/']);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}
