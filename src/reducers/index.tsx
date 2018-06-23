import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { AuthenticationProps } from "../pages/Authentication";
import { FormProps } from "../pages/Form";
import { formReducer } from './formReducer';

export interface ReducersProps {
    auth: AuthenticationProps;
    form: FormProps;
}

export default combineReducers({
    auth: authReducer,
    form: formReducer
});