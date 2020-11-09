import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/auth/login';
import {login} from "../actions";

class LoginContainer extends Component {
    // componentWillMount() {
    //     if (this.props.isAuthenticated) {
    //         this.props.history.push('/home');
    //     }
    // }

    render() {
        const {
            isAuthenticated,
            isLoading,
            error,
            handleLogin,
        } = this.props;

        return isAuthenticated ? null : (
            <Login
                handleLogin={handleLogin}
                isLoading={isLoading}
                error={error}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    handleLogin: (email, password) => {
        dispatch(login(email, password))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginContainer);

