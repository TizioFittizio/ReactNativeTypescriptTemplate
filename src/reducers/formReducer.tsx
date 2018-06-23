import { FormProps } from "../pages/Form";
import { FormAction, FormChangeAction } from "../actions/formActions";
import { Gender } from "../constants/Gender";
import { FORM_CHANGE } from "../constants";

const INITIAL_STATE = {
    username: "",
    usernameError: false,
    password: "",
    passwordError: false,
    gender: Gender.MALE,
    notification: true,
    birthday: new Date(),
    birthdayError: false
};

export const formReducer = (state: FormProps = INITIAL_STATE, action: FormAction): FormProps => {
    switch (action.type){
        case FORM_CHANGE:
            console.warn(state.username);
            const propertyChanged = (action as FormChangeAction).payload;
            return { ...state, [propertyChanged.property]: propertyChanged.value};
        default:
            return INITIAL_STATE;
    }
};