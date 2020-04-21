import axios from 'axios';

import {
  API_URL,
  API_PICK_ONLY_KEYS,
  DEFAULT_USERS_COUNT,
  LANGUAGE_CODES,
  SEED_STRING
} from './api.config';

/**
 * Call API endpoint to get users.
 * @async
 *
 * @param {array} [nationalities] list of nationalities of fetched users
 * @param {number} [usersCount=CONFIG.DEFAULT_USERS_COUNT] users count to fetch
 * @param {string} [seed=CONFIG.SEED_STRING]
 * @param {array<string>} [takeKeys=CONFIG.API_PICK_ONLY_KEYS] list of keys to take from user entity
 *
 * @returns {Promise<Array>} promise of fetched users
 */
export const getUsers = ({
  nationalities = [],
  usersCount = DEFAULT_USERS_COUNT,
  seed = SEED_STRING,
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
      ...(nationsQueryParam && { nat: nationsQueryParam }),
      ...(seed && { seed })
    }
  })
    .then(response => {
      return response.data?.results
    })
    .catch(error => {
      return Promise.reject(error);
    })
};