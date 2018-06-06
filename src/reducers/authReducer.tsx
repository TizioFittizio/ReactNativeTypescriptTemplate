import { LOGIN_SUCCESS, LOGIN_FAILED } from './../constants';
import { AuthAction } from '../actions/authActions';
import { AuthenticationProps } from '../pages/Authentication';

const INITIAL_STATE = {
    isAuthenticating: false
};

export const authReducer = (state: AuthenticationProps = INITIAL_STATE, action: AuthAction): AuthenticationProps => {
    console.warn('Reducer', action);
    switch (action.type) {
        case LOGIN_FAILED:
        case LOGIN_SUCCESS:
            console.warn('Buongiorno');
            return {...state, isAuthenticating: true};
        default:
            return state;
    }
};
