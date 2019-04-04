import React from 'react';
import Icon from 'app_common/Icon';
const LoginTrigger = (props) => {
    const{openLoginForm} = props
    
    return (<div 
    className={'loginButton'}
     title={'login'}
      onClick={openLoginForm}>
      <Icon 
      iconName={"fas fa-sign-in-alt"}
      />
      </div>)}
export default LoginTrigger;