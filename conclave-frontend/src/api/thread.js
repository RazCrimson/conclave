import axios from 'axios';
import {
  THREAD_URL,
  THREAD_CREATE_URL,
  THREAD_EDIT_URL,
  THREAD_DELETE_URL,
  THREAD_CASTVOTE_URL,
} from './constants';

export const fetchThreadApi = thread => {
  return axios.get(THREAD_URL + thread);
};

export const createThreadApi = newThread => {
  return axios.post(THREAD_CREATE_URL, newThread);
};

export const deleteThreadApi = id => {
  return axios.delete(THREAD_URL + id + THREAD_DELETE_URL);
};

export const editThreadApi = (id, data) => {
  return axios.put(THREAD_URL + id + THREAD_EDIT_URL, data);
};

export const castThreadVoteApi = (id, vote) => {
  return axios.put(THREAD_URL + id + THREAD_CASTVOTE_URL, vote);
};


