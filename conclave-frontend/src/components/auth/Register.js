import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'
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


class Register extends Component {
    state = {
        msg: null
    };

    componentDidMount() {
        // Clear Errors
        console.log('cleared errors');
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null });
            }
        }
        if(this.props.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    onFinish = e => {

        const { name, email, password } = e;

        // Create user object
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register
        this.props.register(newUser);
}
    render() {
        return (
            // <Form onSubmit={this.onSubmit} className='register'>
            //     <h5>Register</h5>
            //     {this.state.msg ? (
            //         <Alert variant="dark">
            //             { this.state.msg + '!!!'}
            //         </Alert>
            //     ) : null}
            //     <Form.Group controlId="Name">
            //         <Form.Label>Name</Form.Label>
            //         <Form.Control
            //             type="text"
            //             name="name"
            //             placeholder="Your Name"
            //             onChange={this.onChange}
            //             className="inp"
            //         />
            //     </Form.Group>
            //     <Form.Group controlId="Email">
            //         <Form.Label>Email</Form.Label>
            //         <Form.Control
            //             type="email"
            //             name="email"
            //             placeholder="something@example.com"
            //             onChange={this.onChange}
            //             className="inp"
            //         />
            //         <Form.Text className="text-muted">
            //             We'll never share your email with anyone else.
            //         </Form.Text>
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
            //     <Button variant='outline-success' type="submit">Register</Button>
            // </Form>
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
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                className="register container"
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
                    label="Name"
                    name="name"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
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

export default connect(mapStateToProps, { register, clearErrors })(Register)
