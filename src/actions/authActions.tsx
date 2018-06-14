import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from './../constants';
import { LoginSuccessAction } from './authActions';
import { Toast } from 'native-base';
import { Dispatch } from 'react-redux';
import AuthenticationService from './../services/AuthenticationService';

export interface LoginLoadingAction {
    type: LOGIN_LOADING;
}

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS;
}

export interface LoginFailedAction {
    type: LOGIN_FAILED;
}

export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: LOGIN_LOADING,
        });
        const loginResponse = await AuthenticationService.getInstance().login(username, password);
        console.warn(loginResponse);
        if (loginResponse.error){
            Toast.show({
                text: loginResponse.error,
                position: 'top',
                type: 'danger'
            });
            dispatch({
                type: LOGIN_FAILED
            });
        }
        else {                                           // devi testare
            Toast.show({
                text: 'Succesfull authentication',
                position: 'top',
                type: 'success'
            });
            dispatch({
                type: LOGIN_SUCCESS
            });
        }
    };
};

export type AuthAction = LoginSuccessAction | LoginFailedAction | LoginLoadingAction;