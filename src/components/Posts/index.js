import React, { Component, Fragment } from 'react'
import Loader from 'app_common/Loader'
import EditPostForm from './EditPostForm';
import Styles from './posts.css'
import Post from './post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
    getPostsList,
    createPost, 
    editPost
} from 'app_actions/posts'
import editPostForm from './EditPostForm';

class Posts extends Component {

    componentDidMount() {
        const { getPostsList } = this.props
        getPostsList();
    }


    render() {
        const { state: { posts, loading, errors }, createPost, editPost } = this.props;
        const isPostsAvailable = (!loading && posts && posts.length)
        return (
            <Fragment>
                {loading
                ? <Loader/>
                : isPostsAvailable 
                    ? <ul className='postsList'>{posts.map(post => 
                    <Post  
                    key={post._id} 
                    data ={post}
                    editPost = {editPost}
                    /> )}</ul>
                    : <span>No posts awailable yet</span> 
                }
                 <EditPostForm
                    submit={createPost}
                />
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    state: state.posts,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostsList,
    createPost,
    editPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
