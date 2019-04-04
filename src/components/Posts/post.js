import React from 'react'

export default function (props) {
    const {title, text, autorId, created} = props
    return (<li className = 'post' >
        <div>
            <p className = 'title'>
            {title}
            </p>
            <p className = 'text'>
            {text}
            </p>
            <p className = 'additional'>
            <span className='autor'>
            {autorId? autorId : 'Guest'}
            </span> &nbsp;
            <span className='created'>
            {created}
            </span>
            <span></span>
            </p>
        </div>
    </li>)
}