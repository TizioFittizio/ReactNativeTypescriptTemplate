
import { ReducersProps } from './../reducers/';
import { Dispatch, connect } from 'react-redux';
import { Form } from '../pages/Form';

export function mapStateToProps(state: ReducersProps){
    return {...state};
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        a: "b"
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form as any);