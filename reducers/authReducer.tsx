import { StoreState, LOGIN_SUCCESS, INITIAL_STORE_STATE } from './../constants';
import { AuthAction } from '../actions/authActions';

export const authReducer = (state: StoreState = INITIAL_STORE_STATE, action: AuthAction): StoreState => {
    console.warn('Cosa succede');
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.warn('LOGIN SUCCESSSSSSSSSSSS');
            return {...state};
        default:
            return state;
    }
};
