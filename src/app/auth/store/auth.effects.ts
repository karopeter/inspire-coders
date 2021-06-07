import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const authUrl = 'http://tocoder-001-site1.itempurl.com';

export interface AuthResponseData {
  token: string;
  expiresIn: number;
  userId: string;
  username: string;
}

export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>(`${authUrl}/api/Account/login`, {
        username: authData.payload.username,
        password: authData.payload.password,
        returnSecureToken: true
      }).pipe(catchError(error => {
          // ... client side
          of();
      }), map(resData => {
        // ... server side
        of();
      }));
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
