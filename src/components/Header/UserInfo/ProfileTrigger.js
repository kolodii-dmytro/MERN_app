import React from 'react';
import Icon from 'app_common/Icon';
const ProfileTrigger = (props) => {
    const{openUserMenu} = props
    
    return (<div 
    className={'loginButton'}
     title={'user'}
      onClick={openUserMenu}>
      <Icon 
      iconName={"fas fa-user-astronaut"}
      />
      </div>)}
export default ProfileTrigger;