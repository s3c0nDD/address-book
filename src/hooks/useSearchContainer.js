import { useDispatch, useSelector } from 'react-redux';

import {
  searchTextChange,
  selectLoading,
  selectSearchProcessing,
  selectSearchString,
  selectSearchUsers
} from '../store/module';

/**
 * Custom React hook that acts as
 * a search-for-a-user-related data container
 *
 * @returns {Object}
 */
const useSearchContainer = () => {
  const dispatch = useDispatch();

  /**
   * Search disabled state selector
   */
  const disabled = useSelector(selectLoading);
  /**
   * Search processing state selector
   */
  const processing = useSelector(selectSearchProcessing);
  /**
   * Search text state selector
   */
  const searchText = useSelector(selectSearchString);
  /**
   * Found  state selector
   */
  const foundUsers = useSelector(selectSearchUsers);
  /**
   * Show results flag state
   */
  const showResults = (!!foundUsers?.length || !!searchText.length);

  /**
   * Do search for users
   * @param {string} text searched string
   */
  const doSetSearchText = (text) => {
    dispatch(searchTextChange(text))
  };

  return { foundUsers, disabled, processing, searchText, showResults, doSetSearchText }
};

export default useSearchContainer;