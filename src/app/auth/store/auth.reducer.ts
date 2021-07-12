import { User } from '../../models/user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null as any,
  authError: null as any,
  loading: false
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
   switch (action.type) {
     case AuthActions.AUTHENTICATE_SUCCESS:
       const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
       return {
         ...state,
         authError: null as any,
         user: username,
         loading: false
       };
      case AuthActions.LOGIN_START:
      case AuthActions.SIGNUP_START:
      case AuthActions.FORGET_PASSWORD:
      return {
        ...state,
        authError: null as any,
        loading: true
      };
      case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null as any,
        authError: action.payload,
        loading: false
      };
    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null as any
      };
       default: {
        return state;
       }
   }
}
