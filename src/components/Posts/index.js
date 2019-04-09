import React, { Component, Fragment } from 'react'
import Loader from 'app_common/Loader'
import EditPostForm from './EditPostForm';
import Styles from './posts.css'
import Post from './post';
import CreatePostForm from './CreatePostForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
    getPostsList,
    createPost, 
    editPost,
    deletePost
} from 'app_actions/posts'


class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            createPostFormVisible : false
        }
    }

    componentDidMount() {
        const { getPostsList } = this.props
        getPostsList();
    }
    
    createPostHandler = (data) =>{
        // const {createPost} = this.props;
        // const {createPostFormVisible} = this.state
        this.setState({
            createPostFormVisible: false
        })
        this.props.createPost(data);
        
       
        
        
    }

    render() {
        const { 
            state: { 
                posts, 
                loading,
                errors 
            }, 
            createPost, 
            editPost,
            deletePost,
        } = this.props;
        const {createPostFormVisible} = this.state;
        const isPostsAvailable = (!loading && posts && posts.length)
        return (
            <Fragment>
                <CreatePostForm 
                isVisible = {createPostFormVisible}
                createPost = {this.createPostHandler}
                openClose = {()=>this.setState({createPostFormVisible:!this.state.createPostFormVisible})}
                />

                {loading
                ? <Loader/>
                : isPostsAvailable 
                    ? <ul className='postsList'>{posts.map(post => 
                    <Post  
                    key={post._id} 
                    data ={post}
                    editPost = {editPost}
                    deletePost = {deletePost}
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
    editPost,
    deletePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
