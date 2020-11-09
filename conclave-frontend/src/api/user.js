import axios from 'axios';
import {
  USER_LOGIN_URL,
  USER_LOGOUT_URL,
  USER_REGISTER_URL,
  USER_EDIT_URL,
  USER_URL,
} from './constants';

export const loginApi = (username, password) => {
  return axios.post(USER_LOGIN_URL, {username, password});
};

export const logoutApi = () => {
  return axios.post(USER_LOGOUT_URL, null);
};

export const registerApi = data => {
  return axios.post(USER_REGISTER_URL, data);
};

export const fetchUserProfileApi = username => {
  return axios.get(USER_URL + username);
};

export const editProfileApi = (username, newProfile) => {
  return axios.put(
    USER_URL + username + USER_EDIT_URL,
    newProfile,
  );
};

export const fetchUsersApi = () => {
  return axios.get(USER_URL);
};
