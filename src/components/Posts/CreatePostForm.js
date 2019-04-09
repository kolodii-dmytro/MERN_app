import React from 'react';
import EditPostForm from './EditPostForm'

export default function (props) {
    const {isVisible, createPost, openClose} = props
    

    return ( isVisible 
    ? (<div className = 'postsList'>
    <div className = 'post'>
    <EditPostForm
            cancel={openClose}
            title={'enter title here'}
            text={'enter text here'}
            submit={createPost}
            _id = {null}
        /></div>
    </div>) 
    : <span 
    className = 'createNewPostButton'
    onClick = {openClose}
    >
    Create
    </span>)
    
}