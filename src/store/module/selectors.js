/**
 * Error state selector
 */
export const selectError = state => state.app.error;

/**
 * Loading users state selector
 */
export const selectLoading = state => state.app.loading;

/**
 * Modal's user state selector
 */
export const selectModalUser = state => state.app.modalUser;

/**
 * Nationality state selector
 */
export const selectNationalities = state => state.app.nationalities;

/**
 * Current page selector
 */
export const selectPage = state => state.app.usersPage;

/**
 * Search processing state selector
 */
export const selectSearchProcessing = state => state.app.search.processing;

/**
 * Search string state selector
 */
export const selectSearchString = state => state.app.search.searchString;

/**
 * Searched users state selector
 */
export const selectSearchUsers = state => state.app.search.users;

/**
 * Fetched users selector
 */
export const selectUsers = state => state.app.users;

/**
 * Fetched users cache state selector
 */
export const selectUsersCache = state => state.app.usersCache;
