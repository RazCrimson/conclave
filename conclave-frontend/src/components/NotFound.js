import React, {Component} from "react";
import { Result, Button } from 'antd';

export default class NotFoundPage extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    }
}