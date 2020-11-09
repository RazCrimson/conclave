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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: null
        }
    }

    onFinish = e => {
        console.log('Submit')
        const {email, password} = e;
        this.props.handleLogin(email, password);
}


    render() {
        let {isLoading, error} = this.props;

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'LoginError'}
                loadin={isLoading}
                loadingMessage={'Signing In'}
            />
        );

        return (
            <div>
                {statusMessage}
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
            </div>
        )
    }
}
