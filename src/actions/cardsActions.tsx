
import { CARDS_LOAD_MORE_POSTS, CARDS_LOADING_POSTS } from './actionTypes';
import Post from '../models/Post';
import { Dispatch } from 'react-redux';
import AppService from './../services/AppService';

export interface ICardsLoadMorePostsAction {
    type: CARDS_LOAD_MORE_POSTS;
    payload: Post[];
}

export interface ICardsLoadingPosts {
    type: CARDS_LOADING_POSTS;
}

export const loadMorePosts = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CARDS_LOADING_POSTS
        });
        const {response} = await AppService.getInstance().fetchPosts();
        dispatch({
            type: CARDS_LOAD_MORE_POSTS,
            payload: response
        });
    };
};

export type CardsAction = ICardsLoadMorePostsAction | ICardsLoadingPosts;