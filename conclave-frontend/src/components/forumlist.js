import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StatusMessage from "./statusmessage";
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default class ForumList extends Component {
    render() {
        const {isLoading, error, forums} = this.props;

        if(error || !forums || isLoading || forums.length === 0) {
            return (
                <StatusMessage
                    error={error || !forums}
                    errorMessage={error}
                    loading={isLoading}
                    loadinMessage={'We are fetching the homepage for you'}
                    nothing={forums && forums.length === 0}
                    nothingMessage={'No forums to display'}
                />
            );
        }

        const forumList = forums.map(forum => {
            const {
                name,
                slug,
                description,
                posts_count,
                threads_count,
                last_activity,
            } = forum;

            let lastActivity = (
                <div>('—No Activity—')</div>
            );

            if(last_activity) {
                let {
                    thread_id,
                    thread_name,
                    username,
                    avatar,
                    pinned,
                    naturaltime,
                } = last_activity;

                thread_name =
                    thread_name.length > 43
                    ? thread_name.substring(0, 43) + '...'
                    : thread_name;
                lastActivity = (
                    <div>

                    </div>
                )

                return (
                    <Card
                        style={{ width: 300, marginTop: 16 }}
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Skeleton loading={isLoading} avatar active>
                            <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={thread_name}
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                )
            }
        })
    }
}