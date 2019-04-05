import React from 'react'
//import iconPack from 'app_icons/evil-icons.svg'

export default function (props) {
    const {className, iconName, onClick} = props

        return(
            <span className = {className}
            onClick = {onClick}
            >
                <i className={`${iconName}`}></i>
            </span>
        )
        
}