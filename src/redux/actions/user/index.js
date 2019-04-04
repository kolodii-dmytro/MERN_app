import * as c from "app_constants/user";
import {closeLoginForm} from 'app_actions/app'
import fetchApiData from '../../fetchApiData';

export const login = (payload) => ({
  type: c.LOGIN, payload
});
export const loginSuccesful = id => ({
  type: c.LOGIN_SUCCESFUL, payload: id
});
export const loginFailed = errors => ({
  type: c.LOGIN_FAILED, payload: errors
});

export const thunkActionLogin = payload => {
    return (dispatch, getState) => {
      dispatch(login(payload))
      return fetchApiData('login', payload)
      .then(data=>dispatch(loginSuccesful(data)))
      .catch(error=>dispatch(loginFailed(error)));
    }
}