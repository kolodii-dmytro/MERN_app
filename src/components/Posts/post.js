import React, { Fragment, useState } from 'react'
import moment from 'moment'
import Controls from './controls'
import EditPostForm from './EditPostForm';

export default function (props) {
    const [isHover, setHover] = useState(false);
    const [isEdit, setEdit] = useState(false)
    const { data: { _id, title, text, autorId, created }, editPost, deletePost } = props
    const handleHover = () => setHover(!isHover)
    const handleEdit = () => setEdit(!isEdit);
    const handleDelete = (_id) => deletePost({_id})
    

    return (<li className='post'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        {isEdit ? <EditPostForm
            cancel={handleEdit}
            title={title}
            text={text}
            submit={editPost}
            _id = {_id}
        /> : <Fragment >{isHover
            ? <Controls
                onEdit={handleEdit} 
                onRemove ={() => handleDelete(_id)}/>
            : null}
                <p className='title'>
                    {title}
                </p>
                <p className='text'>
                    {text}
                </p>
                <p className='additional'>
                    <span className='autor'>
                        Created by: &nbsp; {autorId ? autorId : 'Guest'},
            </span> &nbsp;
            <span className='created' title={moment(created).format("MMM Do YY, hh:mm:ss")}>
                        {moment(created).fromNow()}
                    </span>
                </p>
            </Fragment>}
    </li>)
}