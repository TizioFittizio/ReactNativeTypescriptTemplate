import { LOGIN_SUCCESS, LOGIN_FAILED } from './../constants';
import { AuthAction, LoginSuccessAction } from '../actions/authActions';
import { AuthenticationProps } from '../pages/Authentication';
import { LOGIN_LOADING } from './../constants/actionTypes';

const INITIAL_STATE = {
    isAuthenticating: false
};

export const authReducer = (state: AuthenticationProps = INITIAL_STATE, action: AuthAction): AuthenticationProps => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {...state, isAuthenticating: true};
        case LOGIN_FAILED:
        case LOGIN_SUCCESS:
            const user = (action as LoginSuccessAction).payload;
            return {...state, isAuthenticating: false, userProfile: user};
        default:
            return state;
    }
};
