import { useDispatch, useSelector } from 'react-redux';

import {
  searchTextChange,
  selectLoading,
  selectSearchProcessing,
  selectSearchString,
  selectSearchUsers
} from '../store/module';

const useSearchContainer = () => {
  const dispatch = useDispatch();

  const disabled = useSelector(selectLoading);
  const processing = useSelector(selectSearchProcessing);
  const searchText = useSelector(selectSearchString);
  const foundUsers = useSelector(selectSearchUsers);
  const showResults = (!!foundUsers?.length || !!searchText.length);

  const doSetSearchText = (text) => {
    dispatch(searchTextChange(text))
  };

  return { foundUsers, disabled, processing, searchText, showResults, doSetSearchText }
};

export default useSearchContainer;