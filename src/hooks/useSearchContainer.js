import { useDispatch, useSelector } from 'react-redux';

import { searchTextChange } from '../store/module';

const useSearchContainer = () => {
  const dispatch = useDispatch();

  const disabled = useSelector(state => state.app.loading);
  const processing = useSelector(state => state.app.search.processing);
  const searchText = useSelector(state => state.app.search.searchString);
  const foundUsers = useSelector(state => state.app.search.users);
  const showResults = (!!foundUsers?.length || !!searchText.length);

  const doSetSearchText = (text) => {
    dispatch(searchTextChange(text))
  };

  return { foundUsers, disabled, processing, searchText, showResults, doSetSearchText }
};

export default useSearchContainer;