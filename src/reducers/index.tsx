import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { AuthenticationProps } from "../pages/Authentication";
import { FormProps } from "../pages/Form";
import { formReducer } from './formReducer';
import { CardsProps } from "../pages/Cards";
import { cardsReducer } from "./cardsReducer";

export interface ReducersProps {
    auth: AuthenticationProps;
    form: FormProps;
    cards: CardsProps;
}

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    cards: cardsReducer
});