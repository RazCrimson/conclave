import axios from 'axios';
import {FORUM_URL} from './constants';

export const fetchForumsApi = () => {
  return axios.get(FORUM_URL);
};

export const fetchForumApi = forum => {
  return axios.get(FORUM_URL + forum);
};
