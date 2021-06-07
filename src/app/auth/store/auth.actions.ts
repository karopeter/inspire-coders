import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const LOGIN = '[Auth] Login';


export class Login implements Action {
   readonly type = LOGIN;

   constructor(public payload: {email: string; userId: string; token: string; expirationDate: Date}) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

    constructor(public payload: { username: string; password: string}) {}
}

export type AuthActions = Login;
