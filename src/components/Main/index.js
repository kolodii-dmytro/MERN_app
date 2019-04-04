import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from 'app_components/Home'
import Posts from 'app_components/Posts'
import Profile from 'app_components/Profile'
import './main.css';

export default class Main extends Component {

    render() {
        return (
            <div className='main'>
                this is main
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/posts/" component={Posts} />
                    <Route path="/profile/" component={Profile} />
                </Switch>
            </div>
        )
    }
}