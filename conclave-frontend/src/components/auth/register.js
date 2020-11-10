import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import StatusMessage from "../statusmessage";

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


export default class Register extends Component {

    // isFormValid = () => {
    //     const {username, name, email, password, checked} = this.state;
    //
    //     let isFormValid = true;
    //     if (!username || !name || !email || !password || !checked) {
    //         isFormValid = false;
    //     }
    //     return isFormValid;
    // };

    onFinish = e => {
        const {name, email, password} = e;

        // Create user object
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register
        this.props.handleRegister(newUser);

    }
    render() {
        let {isLoading, error} = this.props;

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'Login Error'}
                loading={isLoading}
                loadingMessage={'Registering your account'}
            />
        );

        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                className="register container"
                >
                {statusMessage}
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
