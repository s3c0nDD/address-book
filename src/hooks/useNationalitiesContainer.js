import { useDispatch, useSelector } from 'react-redux';

import { selectNationalities, toggleNationality } from '../store/module';

const useNationalitiesContainer = () => {
  const dispatch = useDispatch();

  const nationalities = useSelector(selectNationalities);

  const doToggleNationality = (name) => {
    dispatch(toggleNationality(name));
  };

  return { nationalities, doToggleNationality }
};

export default useNationalitiesContainer;