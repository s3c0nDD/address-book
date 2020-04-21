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
 * @param {number} [page] page to be fetched when used with seed
 * @param {string} [seed=CONFIG.SEED_STRING]
 * @param {array<string>} [takeKeys=CONFIG.API_PICK_ONLY_KEYS] list of keys to take from user entity
 * @param {number} [usersCount=CONFIG.DEFAULT_USERS_COUNT] users count to fetch
 *
 * @returns {Promise<Array>} promise of fetched users
 */
export const getUsers = ({
  nationalities = [],
  page,
  seed = SEED_STRING,
  takeKeys = API_PICK_ONLY_KEYS,
  usersCount = DEFAULT_USERS_COUNT,
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
      ...(seed && { seed, page })
    }
  })
    .then(response => {
      return response.data?.results
    })
    .catch(error => {
      return Promise.reject(error);
    })
};