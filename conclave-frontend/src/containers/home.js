import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchForum} from "../actions";
import ForumList from "../components/forumlist";

class HomeContainer extends Component {
    componentDidMount() {
        this.props.fetchForums();
    }

    render() {
        return <ForumList {...this.props} />
    }
}

const mapStaToProps = state => ({
    isLoading: state.home.isLoading,
    forums: state.home.forums,
    error: state.home.error,
});

const mapDispatchProps = dispatch => ({
    fetchForums: () => {
        dispatch(fetchForum());
    },
});

export default connect(
    mapStaToProps,
    mapDispatchProps,
)(HomeContainer);