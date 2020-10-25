import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'
import 'antd/dist/antd.css'; 
import { Alert, Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

class Login extends Component {
    state = {
        msg: null
    }

    componentDidMount() {
        // Clear Errors
        console.log('cleared errors');
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null });
            }
        }
        if(this.props.isAuthenticated) {
            this.props.history.push('/files')
        }
    }


    onFinish = e => {
        console.log('Submit')

        const {email, password} = e;

        const user = {
            email,
            password
        }

        //Attempt to login
        this.props.login(user);
}


    render() {
        return (
            // <Form onSubmit={this.onSubmit} className="login container">
            //     <h5>Login</h5>
            //     {this.state.msg ? (
            //         <Alert variant="dark">
            //             { this.state.msg + '!!!'}
            //         </Alert>
            //     ) : null}
            //     <Form.Group controlId="Email">
            //         <Form.Label>Email</Form.Label>
            //         <Form.Control
            //             type="email"
            //             name="email"
            //             placeholder="something@example.com"
            //             onChange={this.onChange}
            //             className="inp"
            //         />
            //     </Form.Group>
            //     <Form.Group controlId='Password'>
            //         <Form.Label>Password</Form.Label>
            //         <Form.Control
            //             type="password"
            //             name="password"
            //             placeholder='your password'
            //             onChange={this.onChange}
            //             className="inp"
            //         />
            //     </Form.Group>
            //     <Button variant='outline-success' type="submit">Login</Button>
            // </Form>
            <Form
                theme = "dark"
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                className="login container"
                >
                {this.state.msg ? (
                    <Alert
                    message="Warning"
                    description={this.state.msg}
                    type="warning"
                    showIcon
                    closable
                  />
                ) : null}
                <Form.Item
                    label="Email"
                    name="email"

                    rules={[
                    {
                        required: true,
                        message: 'Please input your email ID!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    }
}

export default connect(mapStateToProps, { login, clearErrors })(Login)
