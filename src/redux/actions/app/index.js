import * as c from "app_constants/app";

export const openLoginForm = (payload) => ({
  type: c.OPEN_LOGIN_FORM, payload
});
export const closeLoginForm = (payload) => ({
  type: c.CLOSE_LOGIN_FORM, payload
});
