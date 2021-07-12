import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

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

  @Effect()
  forgetPassword = this.actions$.pipe(
    ofType(AuthActions.FORGET_PASSWORD),
    switchMap((forgetpasswordAction: AuthActions.ForgetPassword) => {
      return this.http.patch(`${authUrl}/api/Account/changepassword/${username}/${forgetpassword}`, {
       username: forgetpasswordAction.payload.username,
       oldPassword: forgetpasswordAction.payload.oldPassword,
       newPassword: forgetpasswordAction.payload.newPassword
      }).pipe(map(resetToken => {
        return resetToken;
      }), catchError(errorRes => {
         return handleError(errorRes);
      }));
    })
  );

  @Effect()
  autoLogin = this.actions$.pipe(ofType(AuthActions.AUTO_LOGIN), map(() => {
    const userData: {
      email: string;
      id: string;
      token: string;
      tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return { type: 'DUMMY' };
     }
     const loadedUser = new User(userData.email, userData.id, userData.token, new Date(userData.tokenExpirationDate));
     if (loadedUser) {
       const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
         new AuthActions.AuthenticateSuccess({
           email: loadedUser.email, userId: loadedUser.id, token: userData.token, expirationDate: new Date(userData.tokenExpirationDate)
       });
     }
     return { type: 'DUMMY' };
  }));

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(ofType(AuthActions.AUTHENTICATE_SUCCESS), tap(() => {
     this.router.navigate(['/']);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}
