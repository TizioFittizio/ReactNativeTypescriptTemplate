
import { ReducersProps } from './../reducers/';
import { Dispatch, connect } from 'react-redux';
import { Form } from '../pages/Form';
import { submit, FormAction, change, reset } from './../actions/formActions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state: ReducersProps){
    return { ...state.form };
}

export function mapDispatchToProps(dispatch: Dispatch<FormAction>) {
    return {
        submit: bindActionCreators(submit, dispatch),
        change: bindActionCreators(change, dispatch),
        reset: bindActionCreators(reset, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form as any);