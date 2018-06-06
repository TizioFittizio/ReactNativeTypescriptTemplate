import { LOGIN_SUCCESS } from './../constants';
import { LoginSuccessAction } from './authActions';
import { AnyAction } from 'redux';
import { Toast } from 'native-base';
import { LOGIN_FAILED } from './../constants/actionTypes';
import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { Dispatch } from 'react-redux';

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS;
    payload: any;
}

export interface LoginFailedAction {
    type: LOGIN_FAILED;
    payload: any;
}

export const login = (username: string, password: string) => {
    /*return (dispatch: any) => {
        Toast.show({
            text: 'Ma mica funzionerà da qui',
            position: 'top'
        });
        console.warn(dispatch);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: "jkjkjasd"
        });
    };*/
    return({
        type: LOGIN_SUCCESS,
        payload: "jkjkjasd"
    });
    // console.warn(username, password);
};

export type AuthAction = LoginSuccessAction | LoginFailedAction;