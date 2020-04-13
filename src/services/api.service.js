import axios from 'axios';

import {
  API_URL,
  DEFAULT_USERS_COUNT
} from './api.config';

export const getUser = ({
  usersCount = DEFAULT_USERS_COUNT
} = {}) => {
  return axios.get(API_URL, {
    params: {
      results: usersCount
    }
  })
    .then(response => {
      return response.data?.results
    })
    .catch(error => {
      return Promise.reject(error);
    })
};