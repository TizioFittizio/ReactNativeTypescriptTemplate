
import { AuthenticationProps } from '../pages/Authentication';
import { AuthAction, ILoginSuccessAction } from '../actions/authActions';
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_LOGOUT } from '../actions/actionTypes';

const INITIAL_STATE = {
    isAuthenticating: false
};

export const authReducer = (state: AuthenticationProps = INITIAL_STATE, action: AuthAction): AuthenticationProps => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {...state, isAuthenticating: true};
        case LOGIN_SUCCESS:
            const user = (action as ILoginSuccessAction).payload;
            return {...state, isAuthenticating: false, userProfile: user};
        case LOGIN_LOGOUT:
            return {...state, userProfile: undefined};
        default:
            return state;
    }
};
