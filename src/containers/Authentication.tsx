import { Dispatch, connect } from "react-redux";
import { AuthAction } from "../actions/authActions";
import { login } from './../actions/authActions';
import { Authentication, AuthenticationProps } from './../pages/Authentication';
import { bindActionCreators } from "redux";
import { ReducersProps } from "../reducers";

export function mapStateToProps(state: ReducersProps) {
    return { ...state.auth };
}

export function mapDispatchToProps(dispatch: Dispatch<AuthAction>) {
    return {
        login: bindActionCreators(login, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication as any);