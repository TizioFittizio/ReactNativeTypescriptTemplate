import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { AuthenticationProps } from "../pages/Authentication";

export interface ReducersProps {
    auth: AuthenticationProps;
}

export default combineReducers({
    auth: authReducer
});