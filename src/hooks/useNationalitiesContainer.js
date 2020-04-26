import { useDispatch, useSelector } from 'react-redux';

import { selectNationalities, toggleNationality } from '../store/module';

/**
 * Custom React hook that acts as
 * a state's nationalities-related data container
 *
 * @returns {Object}
 */
const useNationalitiesContainer = () => {
  const dispatch = useDispatch();

  /**
   * Selected nationalities state selector
   */
  const nationalities = useSelector(selectNationalities);

  /**
   * Toggle a nationality
   * @param {string} name nationality's name, which should be toggled
   */
  const doToggleNationality = (name) => {
    dispatch(toggleNationality(name));
  };

  return { nationalities, doToggleNationality }
};

export default useNationalitiesContainer;