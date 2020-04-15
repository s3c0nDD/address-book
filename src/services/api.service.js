import axios from 'axios';

import {
  API_URL,
  DEFAULT_USERS_COUNT,
  LANGUAGE_CODES
} from './api.config';

export const getUsers = ({
  nationalities = [],
  usersCount = DEFAULT_USERS_COUNT
} = {}) => {
  const nationalitiesCodes = nationalities.map((name) => {
    const mapping = LANGUAGE_CODES[name];
    !mapping && console.warn('No API mapping for nationality:', name);
    return mapping;
  });

  const nationsQueryParam = nationalitiesCodes?.filter(Boolean).join(',');

  return axios.get(API_URL, {
    params: {
      ...(usersCount && { results: usersCount }),
      ...(nationsQueryParam && { nat: nationsQueryParam })
    }
  })
    .then(response => {
      return response.data?.results
    })
    .catch(error => {
      return Promise.reject(error);
    })
};