import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from './../constants';
import { LoginSuccessAction } from './authActions';
import { Toast } from 'native-base';
import { Dispatch } from 'react-redux';
import AuthenticationService from './../services/AuthenticationService';
import User from './../models/User';

export interface LoginLoadingAction {
    type: LOGIN_LOADING;
}

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS;
    payload: User;
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
        else {
            Toast.show({
                text: 'Authentication succesfull ',
                position: 'top',
                type: 'success'
            });
            dispatch({
                type: LOGIN_SUCCESS,
                payload: loginResponse.response
            });
        }
    };
};

export type AuthAction = LoginSuccessAction | LoginFailedAction | LoginLoadingAction;