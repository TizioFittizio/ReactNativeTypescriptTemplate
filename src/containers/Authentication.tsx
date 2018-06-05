import { StoreState } from "../constants";
import { Dispatch, connect } from "react-redux";
import { AuthAction } from "../actions/authActions";
import { login } from './../actions/authActions';
import { Authentication, Props } from './../pages/Authentication';
import { bindActionCreators } from "redux";

export function mapStateToProps({userProfile}: StoreState) {
    return {
        userProfile
    };
}

export function mapDispatchToProps(dispatch: Dispatch<AuthAction>) {
    return {
        login: bindActionCreators(login, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication as any);