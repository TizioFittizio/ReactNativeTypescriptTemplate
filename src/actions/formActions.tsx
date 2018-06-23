
import { FORM_SUBMIT, FORM_CHANGE } from './../constants/actionTypes';

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

export const change = (propertychanged: PropertyChanged) => {
    return {
        type: FORM_CHANGE,
        payload: propertychanged
    };
};

export const submit = () => {
    
}

export type FormAction = FormSubmitAction | FormChangeAction;