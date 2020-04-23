import {
  delay,
  put
} from 'redux-saga/effects';

import { ACTION_TYPES, CONSTANTS } from './constants';
import { searchTextChangeFlow } from './sagas';

describe('Saga' , () => {
  let generator = null;


  describe('searchTextChangeFlow', () => {
    const exampleText = 'example';

    beforeAll(() => {
      generator = searchTextChangeFlow(exampleText);
    });

    it('should put SEARCH_TEXT_SET action', () => {
      const expected = put({ type: ACTION_TYPES.SEARCH_TEXT_SET, payload: exampleText });
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it('should put SEARCH_TEXT_APPLY_STARTED action', () => {
      const expected = put({ type: ACTION_TYPES.SEARCH_TEXT_APPLY_STARTED });
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it('should delay for CONSTANTS.SEARCH_DELAY_MS', () => {
      const expected = delay(CONSTANTS.SEARCH_DELAY_MS);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });
  })
});