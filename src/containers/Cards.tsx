
import { ReducersProps } from './../reducers/index';
import { Dispatch, connect } from 'react-redux';
import { Cards } from './../pages/Cards';
import { loadMorePosts } from './../actions/cardsActions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state: ReducersProps){
    return { ...state.cards };
}

export function mapDispatchToProps(dispatch: Dispatch<any>){
    return {
        loadMorePosts: bindActionCreators(loadMorePosts, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards as any);