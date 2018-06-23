
import { FORM_SUBMIT, FORM_CHANGE, FORM_RESET } from './../constants/actionTypes';

export interface PropertyChanged {
    property: string;
    value: any;
}

export interface FormSubmitAction {
    type: FORM_SUBMIT;
}

export interface FormChangeAction {
    type: FORM_CHANGE;
    payload: PropertyChanged;
}

export interface FormResetAction {
    type: FORM_RESET;
}

export const change = (propertychanged: PropertyChanged) => {
    return {
        type: FORM_CHANGE,
        payload: propertychanged
    };
};

export const submit = () => {
    return {
        type: FORM_SUBMIT
    };
};

export const reset = () => {
    return {
        type: FORM_RESET
    };
};

export type FormAction = FormSubmitAction | FormChangeAction;