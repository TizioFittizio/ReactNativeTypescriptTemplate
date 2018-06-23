import { Toast } from 'native-base';
import { Dispatch } from 'react-redux';
import AuthenticationService from './../services/AuthenticationService';
import User from './../models/User';
import StorageService from './../services/StorageService';
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOGOUT } from './actionTypes';
import { EStorageKey } from '../common/Enums';

export interface ILoginLoadingAction {
    type: LOGIN_LOADING;
}

export interface ILoginSuccessAction {
    type: LOGIN_SUCCESS;
    payload: User;
}

export interface ILoginFailedAction {
    type: LOGIN_FAILED;
}

export interface ILoginLogoutAction {
    type: LOGIN_LOGOUT;
}

export const preLoadUser = () => {
    return async (dispatch: Dispatch) => {
        const userLogged = await StorageService.getInstance().getObject(EStorageKey.USER_AUTHENTICATED, new User());
        if (userLogged !== null){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: userLogged as User
            });
        }
    };
};

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
            StorageService.getInstance().set(EStorageKey.USER_AUTHENTICATED, loginResponse.response);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: loginResponse.response
            });
        }
    };
};

export const logout = () => {
    return async (dispatch: Dispatch) => {
        StorageService.getInstance().remove(EStorageKey.USER_AUTHENTICATED);
        dispatch({
            type: LOGIN_LOGOUT
        });
    };
};

export type AuthAction = ILoginSuccessAction | ILoginFailedAction | ILoginLoadingAction | ILoginLogoutAction;