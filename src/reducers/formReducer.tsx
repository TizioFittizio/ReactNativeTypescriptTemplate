import { FormProps } from "../pages/Form";
import { FormAction, FormChangeAction } from "../actions/formActions";
import { Gender } from "../constants/Gender";
import { FORM_CHANGE } from "../constants";
import { FORM_SUBMIT } from './../constants/actionTypes';

// You may want to use different properties for errors
const INITIAL_STATE = {
    username: "",
    usernameError: "",
    password: "",
    passwordError: "",
    gender: Gender.MALE,
    notification: true,
    birthday: new Date(),
    birthdayError: "",
    success: false
};

export const formReducer = (state: FormProps = INITIAL_STATE, action: FormAction): FormProps => {
    switch (action.type){
        case FORM_SUBMIT:
            const validUsername = validateUsername(state.username);
            const validPassword = validatePassword(state.password);
            return {
                ...state,
                usernameError: validUsername !== true ? validUsername : "",
                passwordError: validPassword !== true ? validPassword : "",
                success: validUsername === true && validPassword === true
            };
        case FORM_CHANGE:
            const propertyChanged = (action as FormChangeAction).payload;
            return {
                ...state,
                [propertyChanged.property]: propertyChanged.value,
                usernameError: propertyChanged.property === 'username' ? "" : state.usernameError,
                passwordError: propertyChanged.property === 'password' ? "" : state.passwordError
            };
        default:
            return INITIAL_STATE;
    }
};

const validateUsername = (username: string): (string | true) => {
    if (username.length === 0){
        return 'Insert an username';
    }
    if (username.length < 6){
        return 'Username is too short';
    }
    if (!username.match(/^[A-Za-z\w]*$/g)){
        return 'Username contains invalid characters';
    }
    return true;
};

const validatePassword = (password: string): (string | true) => {
    if (password.length === 0){
        return 'Insert a password';
    }
    if (password.length < 6){
        return 'Password is too short';
    }
    return true;
};