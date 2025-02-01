export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = "api/auth";
export const SIGNUP_ROUTE = "${AUTH_ROUTES}/signup";
export const LOGIN_ROUTE = "${AUTH_ROUTE}/Login";
export const GET_USER_INFO = "${AUTH_ROUTES}/userInfo";
export const UPDATE_PROFILE_ROUTE = "${AUTH_ROUTES}/updateProfile";
export const ADD_PROFILE_IMAGE_ROUTE = "${AUTH_ROUTES}/add-Profile-Image";
export const REMOVE_PROFILE_IMAGE_ROUTE = "${AUTH_ROUTES}/remove-Profile-Image";