import { FORM_SUBMIT, FORM_CHANGE, FORM_RESET } from "./actionTypes";

export interface IPropertyChanged {
    property: string;
    value: any;
}

export interface IFormSubmitAction {
    type: FORM_SUBMIT;
}

export interface IFormChangeAction {
    type: FORM_CHANGE;
    payload: IPropertyChanged;
}

export interface IFormResetAction {
    type: FORM_RESET;
}

export const change = (propertychanged: IPropertyChanged) => {
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

export type FormAction = IFormSubmitAction | IFormChangeAction;