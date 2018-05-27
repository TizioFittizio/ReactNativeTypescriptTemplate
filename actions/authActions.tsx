import { LOGIN_SUCCESS } from './../constants';
import { LoginSuccessAction } from './authActions';
import { AnyAction } from 'redux';

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS;
    payload: any;
}

export interface LoginFailedAction {
    type: LOGIN_SUCCESS;
    payload: any;
}

export const login = (username: string, password: string) => {
    console.warn('Io sono l\'action!');
    return {
        type: LOGIN_SUCCESS,
        payload: "jkjkjasd"
    };
};

export type AuthAction = LoginSuccessAction;