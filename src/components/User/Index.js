import React, { Component, Fragment } from "react";
import LoginForm from './loginForm'

export default class User extends Component {
    constructor(props) {
        super(props)
    }

    submitLoginForm = (payload) => {
        console.log(payload);
        const { login } = this.props
        login(payload);
    }

    renderUserInfo = (props) => (<Fragment>
        <span>UserId: {props.id}</span>
        <span>UserName: {props.name}</span>
    </Fragment>)



    render() {
        const { user: {
            loading,
            id,
            errors,
            name
        } } = this.props;

        return (
            <Fragment>
                {loading && <span>Loading now...</span>}
                {!loading && id && this.renderUserInfo({ id, name })}
                {!loading && !id && <LoginForm
                submitLoginForm = {this.submitLoginForm}
                errors = {errors}
                />}
            </Fragment>
        )
    }
}
