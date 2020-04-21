/**
 * The API URL address.
 * @constant
 *
 * @type {string}
 */
export const API_URL = 'https://randomuser.me/api/';

/**
 * Default keys, which should be taken from api result's user entity.
 * @constant
 *
 * @type {array<string>}
 */
export const API_PICK_ONLY_KEYS = [
  'name',
  'location',
  'email',
  'login',
  'phone',
  'cell',
  'id',
  'picture',
  'nat'
];

/**
 * Default count of users to fetch.
 * @constant
 *
 * @type {number}
 */
export const DEFAULT_USERS_COUNT = 1;

/**
 * Language code mappings.
 * @constant
 *
 * @type {object}
 */
export const LANGUAGE_CODES = {
  british: 'GB',
  french: 'FR',
  spanish: 'ES',
  swiss: 'CH'
};

/**
 * Default seed string used to make api results consistent
 * @constant
 *
 * @type {string}
 */
export const SEED_STRING = 's3c0nDD';