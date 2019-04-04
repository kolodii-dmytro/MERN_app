import React from 'react'
//import iconPack from 'app_icons/evil-icons.svg'

export default function (props) {
    const {className, iconName} = props

        return(
            <span className = {className}>
                <i className={`${iconName}`}></i>
            </span>
        )
        
}