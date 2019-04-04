import * as c from "app_constants/posts";
import fetchApiData from '../../fetchApiData';


export const getPostsListSucces = (payload) => ({
    type: c.GET_POSTS_LIST_SUCCES, payload
});
export const getPostsListFailed = (payload) => ({
    type: c.GET_POSTS_LIST_FAILED, payload
});

export const getPostsList = payload => (dispatch, getState) => {
    dispatch({type: c.GET_POSTS_LIST, payload})
    return fetchApiData('getPostsList', payload)
    .then(data=>dispatch( getPostsListSucces(data)))
    .catch(error=>dispatch(getPostsListFailed(error)))
};

export const createPostSucces = (payload) => ({
    type: c.CREATE_POST_SUCCES, payload
});
export const createPostFailed = (payload) => ({
    type: c.CREATE_POST_FAILED, payload
});
export const createPost = (payload) => (dispatch, getState) =>{
    const {user:{id}} = getState()
    console.log(id);
    console.log(payload)
    dispatch({type: c.CREATE_POST, payload});
    return fetchApiData('createPost', {...payload, autorId: id})
    .then(data=>dispatch( createPostSucces(data)))
    .catch(error=>dispatch( createPostFailed(error)))

};

export const editPost = (payload) => ({
    type: c.EDIT_POST, payload
});
export const editPostSucces = (payload) => ({
    type: c.EDIT_POST_SUCCES, payload
});
export const editPostFailed = (payload) => ({
    type: c.EDIT_POST_FAILED, payload
});

export const deletePost = (payload) => ({
    type: c.DELETE_POST, payload
});
export const deletePostSucces = (payload) => ({
    type: c.DELETE_POST_SUCCES, payload
});
export const deletePostFailed = (payload) => ({
    type: c.DELETE_POST_FAILED, payload
});
export const getPost = (payload) => ({
    type: c.GET_POST, payload
});
export const getPostSucces = (payload) => ({
    type: c.GET_POST_SUCCES, payload
});
export const getPostFailed = (payload) => ({
    type: c.GET_POST_FAILED, payload
});

