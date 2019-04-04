import * as c from 'app_constants/user' 
const defaultState = { 
    id: null, 
    name: null, 
    loading: false, 
    errors: [] 
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case c.LOGIN:
            return { ...state, loading:true, errors:[] }
        case c.LOGIN_SUCCESFUL:
            return { ...state, id:action.payload.id, loading:false, errors:[] }
        case c.LOGIN_FAILED:
            return { ...state, loading:false, errors: [action.payload] }
        default:
            return state
    }
}