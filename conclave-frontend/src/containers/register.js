import React, {Component} from 'react';
import {connect} from 'react-redux'
import Register from "../components/auth/register";
import {register} from "../actions";

class RegisterContainer extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuthenticated) {
            this.props.history.push('/home')
        }
    }

    render() {
        const {
            isAuthenticated,
            isLoading,
            error,
            handleRegister,
        } = this.props;

        return isAuthenticated ? null : (
            <Register
                handleRegister={handleRegister}
                isLoading={isLoading}
                error={error}
            />
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.register.error,
    isLoading: state.register.isLoading,
});

const mapDispatchToProps = dispatch => ({
    handleRegister: data => {
        dispatch(register(data))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterContainer);