import React, { Component, useEffect } from 'react'
import Loader from 'app_common/Loader'
import EditPostForm from './EditPostForm';
import Post from './post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
    getPostsList,
    createPost
} from 'app_actions/posts'
import editPostForm from './EditPostForm';

class Posts extends Component {

    componentDidMount() {
        const { getPostsList } = this.props
        getPostsList();
    }


    render() {
        const { state: { posts, loading, errors }, createPost } = this.props;
        const isPostsAvailable = (!loading && posts && posts.length)
        return (
            <div> this is posts
                {loading
                ? <Loader/>
                : isPostsAvailable 
                    ? <ul>{posts.map(post => Post(post) )}</ul>
                    : <span>No posts awailable yet</span> 
                }
                 <EditPostForm
                    submit={createPost}
                />


                {/* <Loader /> */}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    state: state.posts,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostsList,
    createPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
