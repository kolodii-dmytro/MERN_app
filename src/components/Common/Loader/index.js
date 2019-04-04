import React from 'react';
import styles from './loader.css'

export default (props) => {
    const {size} = props
    return(
<div className ={`loader ${size}`}>Loading...</div>
)}
