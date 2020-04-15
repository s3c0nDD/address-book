import axios from 'axios';

import {
  API_URL,
  API_PICK_ONLY_KEYS,
  DEFAULT_USERS_COUNT,
  LANGUAGE_CODES
} from './api.config';

export const getUsers = ({
  nationalities = [],
  usersCount = DEFAULT_USERS_COUNT,
  takeKeys = API_PICK_ONLY_KEYS
} = {}) => {
  const nationalitiesCodes = nationalities.map((name) => {
    const mapping = LANGUAGE_CODES[name];
    !mapping && console.warn('No API mapping for nationality:', name);
    return mapping;
  });

  const nationsQueryParam = nationalitiesCodes?.filter(Boolean).join(',');

  return axios.get(API_URL, {
    params: {
      ...(takeKeys && { inc: takeKeys.join(',') }),
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