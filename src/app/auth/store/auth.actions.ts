import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Login';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const FORGET_PASSWORD = '[Auth] Forget Password';


export class AuthenticateSuccess implements Action {
   readonly type = AUTHENTICATE_SUCCESS;

   constructor(public payload: {email: string; userId: string; token: string; expirationDate: Date}) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

    constructor(public payload: { username: string; password: string}) {}
}

export class AuthenticateFail implements Action {
   readonly type = AUTHENTICATE_FAIL;
   constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: {firstName: string; lastName: string; email: string; username: string; password: string}) {}
}

export class ClearError implements Action {
   readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
   readonly type = AUTO_LOGIN;
}

export class ForgetPassword implements Action {
  readonly type = FORGET_PASSWORD;

  constructor(public payload: {username: string; oldPassword: string; newPassword: string}) {}
}

export type AuthActions = AuthenticateSuccess | LoginStart | AuthenticateFail | SignupStart | ClearError | AutoLogin | ForgetPassword;
