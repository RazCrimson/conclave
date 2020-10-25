import axios from 'axios';
import {
  THREAD_URL,
  THREAD_CREATE_URL,
  THREAD_EDIT_URL,
  THREAD_DELETE_URL,
  THREAD_CASTVOTE_URL,
} from './constants';
import {getConfig} from '../utils/config';

export const fetchThreadApi = thread => {
  return axios.get(THREAD_URL + thread, getConfig());
};

export const createThreadApi = newThread => {
  return axios.post(THREAD_CREATE_URL, newThread, getConfig());
};

export const deleteThreadApi = id => {
  return axios.delete(THREAD_URL + id + THREAD_DELETE_URL, getConfig());
};

export const editThreadApi = (id, data) => {
  return axios.put(THREAD_URL + id + THREAD_EDIT_URL, data, getConfig());
};

export const castThreadVoteApi = (id, vote) => {
  return axios.put(THREAD_URL + id + THREAD_CASTVOTE_URL, vote, getConfig());
};


