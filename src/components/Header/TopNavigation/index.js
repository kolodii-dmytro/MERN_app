import React, { useState } from "react";
import navigationMap from './navigationMap';
import {NavLink } from "react-router-dom";

export default function (props) {
    return <nav>
        {navigationMap.map((item) => (
            <NavLink 
            key = {item.id}
            className = {`item `}
            activeClassName="active"
            exact
            to = {item.to}
            >
            {item.text}
            </NavLink>
        ))}
    </nav>
}