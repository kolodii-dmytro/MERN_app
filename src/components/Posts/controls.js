import React from 'react'
import Icon from 'app_common/Icon'

export default function (props) {
    const {onEdit, onRemove} = props

    return (<div className='controls'>
    <Icon 
    className = 'buttonIcon' 
    iconName={"far fa-edit"} 
    onClick = {onEdit}/>
    <Icon 
    className = 'buttonIcon' 
    iconName={"far fa-trash-alt"}
    onClick = {onRemove}/>
    
    </div>)
    
}