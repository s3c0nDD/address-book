import { useDispatch, useSelector } from 'react-redux';

import { toggleNationality } from '../store/module';

const useNationalitiesContainer = () => {
  const dispatch = useDispatch();

  const nationalities = useSelector(state => state.app.nationalities);

  const doToggleNationality = (name) => dispatch(toggleNationality(name));

  return { nationalities, doToggleNationality }
};

export default useNationalitiesContainer;