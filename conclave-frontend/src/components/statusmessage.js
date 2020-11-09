import React, {Component} from 'react';
import {Alert, Spin } from 'antd';

export default class StatusMessage extends Component {
    render() {
        const {
            loading,
            loadingMessage,
            error,
            errorMessage,
            success,
            successMessage,
            nothing,
            nothingMessage,
        } = this.props;

        if (loading) {
            return (
                <Spin
                    tip={loadingMessage || 'Fetching content for you'}
                />
            );
        } else if (error) {
            return (
                <Alert
                    message={errorMessage || error || "Sorry, Something went wrong"}
                    type="warning"
                    showIcon
                />
            );
        } else if (success) {
            return (
                <Alert
                    message={successMessage || 'Successful'}
                    type="success"
                    showIcon
                />
            );
        } else if (nothing){
            return (
                <Alert
                    message={nothingMessage || 'Nothing to display'}
                    type="info"
                    showIcon
                />
            );
        }
        else return null
    }
}