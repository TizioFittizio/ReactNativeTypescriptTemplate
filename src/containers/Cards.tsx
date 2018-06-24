
import { ReducersProps } from './../reducers/index';
import { Dispatch, connect } from 'react-redux';
import { Cards } from './../pages/Cards';

export function mapStateToProps(state: ReducersProps){
    return { ...state.cards };
}

export function mapDispatchToProps(dispatch: Dispatch<any>){
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards as any);