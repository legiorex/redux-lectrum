// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import FlipMove from 'react-flip-move';

// Instruments
import Styles from './styles.m.css';

// Components
import { Composer, Catcher, Post } from '../../components';

// Actions

import { postsActions } from "../../bus/posts/actions";
import { usersActions } from "../../bus/users/actions";

const mapStateToProps = (state) => {

    return {
        posts:   state.posts,
        profile: state.profile,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            { ...postsActions, ...usersActions },
            dispatch
        ),
    };
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Posts extends Component {

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
        actions.fetchUsersAsync();

    }

    render () {
        const { actions, posts, profile } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        author = { post.get('author') }
                        comment = { post.get('comment') }
                        created = { post.get('created') }
                        id = { post.get('id') }
                        likes = { post.get('likes') }
                        profile = { profile }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.posts }>
                <Composer actions = { actions } profile = { profile } />
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}
