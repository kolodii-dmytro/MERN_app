import React, { Component } from "react";
import TopNavigation from 'app_components/Header/TopNavigation';
import UserInfo from './UserInfo';
import style from "./header.css";
import Icon from 'app_common/icon'
import Logo from 'app_common/Logo'
export default class Header extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const { name } = this.props
        return (
            <header className="header">
                <Logo />
                <TopNavigation/>
                <UserInfo />
            </header>
        )
    }
}
