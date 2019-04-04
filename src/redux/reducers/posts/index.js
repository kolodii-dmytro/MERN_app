import * as c from "app_constants/posts";

const defaultState = {
    posts:null,
    loading:false,
    errors:[]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case c.GET_POSTS_LIST:
        case c.GET_POST:
        case c.CREATE_POST:
        case c.DELETE_POST:
            return { ...state, loading:true, errors:[] }
        case c.GET_POSTS_LIST_SUCCES:
            return { ...state, posts:action.payload.posts, loading:false, errors:[] }
        case c.GET_POSTS_LIST_FAILED:
            return { ...state, loading:false, errors: [action.payload] }
        case c.CREATE_POST_SUCCES:
            return {...state, loading:false, posts:[...state.posts, action.payload.resp]}
        
        
            default:
            return state
    }
}

/**
c.GET_POSTS_LIST
c.GET_POSTS_LIST_SUCCES
c.GET_POSTS_LIST_FAILED
c.GET_POST
c.GET_POST_SUCCES
c.GET_POST_FAILED
c.CREATE_POST
c.CREATE_POST_SUCCES
c.CREATE_POST_FAILED
c.EDIT_POST
c.EDIT_POST_SUCCES
c.EDIT_POST_FAILED
c.DELETE_POST
c.DELETE_POST_SUCCES
c.DELETE_POST_FAILED


 */