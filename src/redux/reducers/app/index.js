import * as app from 'app_constants/app'
import {LOGIN_SUCCESFUL} from 'app_constants/user'
const defaultState = { 
    isLoginFormOpened: false, 
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case app.OPEN_LOGIN_FORM:
            return { ...state, isLoginFormOpened:true }
        case app.CLOSE_LOGIN_FORM:
            return { ...state, isLoginFormOpened:false }
        case LOGIN_SUCCESFUL:
            return { ...state, isLoginFormOpened:false }
        default:
            return state
    }
}