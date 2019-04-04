import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login } from 'app_actions/user'
import { openLoginForm, closeLoginForm } from 'app_actions/app';
import LoginForm from './LoginForm'
import LoginTrigger from './LoginTrigger'
import ProfileTrigger from './ProfileTrigger'
import Loader from 'app_common/Loader'
import Icon from 'app_common/Icon';

const mapStateToProps = state => ({
    user: state.user,
    isLoginFormOpened: state.app.isLoginFormOpened
})

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    openLoginForm,
    closeLoginForm
}, dispatch)

function UserInfo(props) {
    const { user, openLoginForm, closeLoginForm } = props
    const { id, loading } = user

    // console.log(props)

    return (<Fragment>
        <LoginForm />
        {loading
            ? <Loader
                size='small'
            />
            : id 
            ? <ProfileTrigger 
            openUserMenu = {console.log('menu opening')}
            />
            :<LoginTrigger
                openLoginForm={openLoginForm}
            />
        }
    </Fragment>


    )

}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)