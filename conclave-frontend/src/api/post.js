import axios from 'axios';
import {
  POST_URL,
  POST_DELETE_URL,
  POST_CREATE_URL,
  POST_EDIT_URL, POST_CASTVOTE_URL,
} from './constants';

export const createPostApi = newPost => {
  return axios.post(POST_CREATE_URL, newPost);
};

export const deletePostApi = id => {
  return axios.delete(POST_URL + id + POST_DELETE_URL);
};

export const editPostApi = (id, content) => {
  return axios.put(
    POST_URL + id + POST_EDIT_URL,
    {content: content}
  );
};

export const castPostVoteApi = (id, vote) => {
  return axios.put(POST_URL + id + POST_CASTVOTE_URL + vote);
};
