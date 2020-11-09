import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth.js'
import { Menu, Grid } from 'antd';

const { useBreakpoint } = Grid;

const RightMenu = (props) => {
  const { md } = useBreakpoint();
  const { isAuthenticated, user } = props.auth;

    const authLinks = (
        <Fragment>
            <a href="/">Logout</a>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <Menu.Item key="mail">
                <a href="/login">Login</a>
            </Menu.Item>
            <Menu.Item key="app">
                <a href="/register">Register</a>
            </Menu.Item>
        </Fragment>
    )

  return (
    <Menu mode={md ? "horizontal" : "inline"}>
        {isAuthenticated ? authLinks : guestLinks}
    </Menu>
  );
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(RightMenu)
