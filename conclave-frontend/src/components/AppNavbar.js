import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/auth.js';
import { Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;


export class AppNavbar extends Component {
    state = {
        open: false
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                    <Menu.Item onClick={this.props.logout} href="/">
                        <span className='nav-text'>Logout</span>
                    </Menu.Item>
                    <Menu.Item className="navbar-text mr-3">
                        <strong className='nav-text'>{ user ? `Welcome ${user.name}` : '' }</strong>
                    </Menu.Item>
                    <Menu.Item>Profile</Menu.Item>
                    <Menu.Item>Notifications</Menu.Item>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <Sider>
                <Menu.Item onClick={this.props.logout} href="/">
                    Register
                </Menu.Item>
                </Sider>
                <Sider>
                <Menu.Item onClick={this.props.logout} href="/">
                    Login
                </Menu.Item>
                </Sider>
            </Fragment>
        )

        return (

        <Layout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: ' 75%' }}>
                <Menu theme="dark" mode="horizontal">
                    <Layout>
                    <Layout>
                    <Content><Menu.Item>Hi</Menu.Item></Content>
                        {isAuthenticated ? authLinks : guestLinks}
                    <Button type="primary"
                        variant={this.props.darkMode ? "outline-dark" : "dark"}
                        onClick={this.props.toggleMode}
                        className='toggle-btn'
                    >
                        {this.props.darkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                    </Layout>
                    </Layout>
                </Menu>
            </Header>
            {/*<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>*/}
            {/*    <div className="logo" />*/}
            {/*    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
            {/*        <Menu.Item key="1">nav 1</Menu.Item>*/}
            {/*        <Menu.Item key="2">nav 2</Menu.Item>*/}
            {/*        <Menu.Item key="3">nav 3</Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</Header>*/}
        </Layout>

        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(AppNavbar)