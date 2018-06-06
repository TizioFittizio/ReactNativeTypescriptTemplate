import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from './../constants';
import { LoginSuccessAction } from './authActions';
import { Toast } from 'native-base';
import { Dispatch } from 'react-redux';

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
    console.warn(username, password);
    return async (dispatch: Dispatch) => {
        dispatch({
            type: LOGIN_LOADING,
        });
        await new Promise((res) => {
            setTimeout(res, 3000);
        });
        dispatch({
            type: LOGIN_SUCCESS
        });
    };
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
    /* return({
        type: LOGIN_SUCCESS,
        payload: "jkjkjasd"
    }); */
    // console.warn(username, password);
};

export type AuthAction = LoginSuccessAction | LoginFailedAction | LoginLoadingAction;