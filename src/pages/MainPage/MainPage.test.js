import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import MainPage from './MainPage'
import { initializeUsers } from '../../store/module';

describe('MainPage', () => {
  let mount;
  let wrapper;
  let mockStore;

  const initialState = {
    app: {
      loading: false,
      error: null,
      users: [],
      search: {
        users: [],
        processing: false,
        searchString: ''
      },
      modalUser: null,
      nationalities: {
        polish: true
      }
    }
  };

  beforeAll(() => {
    mount = createMount();
    mockStore = configureStore()(initialState);
    jest.spyOn(window, 'scroll').mockImplementation(jest.fn());
  });

  beforeEach(() => {
    mockStore.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={mockStore}>
        <MainPage />
      </Provider>
    );
  });

  afterAll(() => {
    window.scroll.mockClear();
  });

  it('mount renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls initializeUsers on mount', () => {
    expect(mockStore.dispatch).toBeCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(initializeUsers());
  });
});