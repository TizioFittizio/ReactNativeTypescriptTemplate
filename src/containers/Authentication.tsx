import { Dispatch, connect } from "react-redux";
import { AuthAction, preLoadUser, login, logout } from "../actions/authActions";
import { Authentication, AuthenticationProps } from './../pages/Authentication';
import { bindActionCreators } from "redux";
import { ReducersProps } from "../reducers";

export function mapStateToProps(state: ReducersProps) {
    return { ...state.auth };
}

export function mapDispatchToProps(dispatch: Dispatch<AuthAction>) {
    return {
        login: bindActionCreators(login, dispatch),
        preLoadUser: bindActionCreators(preLoadUser, dispatch),
        logout: bindActionCreators(logout, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication as any);