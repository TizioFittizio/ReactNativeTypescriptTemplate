import { CardsProps } from "../pages/Cards";
import { CardsAction } from "../actions/cardsActions";
import { CARDS_LOADING_POSTS, CARDS_LOAD_MORE_POSTS } from './../actions/actionTypes';
import { ICardsLoadMorePostsAction } from './../actions/cardsActions';

const INITIAL_STATE = {
    posts: [],
    loading: true
};

export const cardsReducer = (state: CardsProps = INITIAL_STATE, action: CardsAction): CardsProps => {
    switch (action.type) {
        case CARDS_LOADING_POSTS:
            return { ...state, loading: true};
        case CARDS_LOAD_MORE_POSTS:
            const posts = (action as ICardsLoadMorePostsAction).payload;
            return {
                ...state,
                loading: false,
                posts: state.posts.concat(posts)
            };
        default:
            return state;
    }
};
