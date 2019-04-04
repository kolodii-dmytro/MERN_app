import { combineReducers } from 'redux';
import userReducer from './user';
import appRaducer from './app';
import postsReducer from './posts'


export default combineReducers({
    app: appRaducer,
    user: userReducer,
    posts: postsReducer
    
   });