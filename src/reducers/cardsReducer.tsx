import { CardsProps } from "../pages/Cards";

const INITIAL_STATE = {
    a: 'asdasd'
};

export const cardsReducer = (state: CardsProps = INITIAL_STATE, action: any): CardsProps => {
    switch (action.type) {
        default:
            return state;
    }
};
