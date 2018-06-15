import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LOGIN_LOGOUT } from './../constants';
import { AuthAction, LoginSuccessAction } from '../actions/authActions';
import { AuthenticationProps } from '../pages/Authentication';

const INITIAL_STATE = {
    isAuthenticating: false
};

export const authReducer = (state: AuthenticationProps = INITIAL_STATE, action: AuthAction): AuthenticationProps => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {...state, isAuthenticating: true};
        case LOGIN_SUCCESS:
            const user = (action as LoginSuccessAction).payload;
            return {...state, isAuthenticating: false, userProfile: user};
        case LOGIN_LOGOUT:
            return {...state, userProfile: undefined};
        default:
            return state;
    }
};
