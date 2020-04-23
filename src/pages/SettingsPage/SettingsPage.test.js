import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import SettingsPage from './SettingsPage'
import { NationalitySwitch } from '../../components/NationalitySwitchGroup';
import { toggleNationality } from '../../store/module';

describe('SettingsPage', () => {
  let mount;
  let wrapper;
  let mockStore;

  const initialState = {
    app: {
      nationalities: { polish: true }
    }
  };

  beforeAll(() => {
    mount = createMount();
    mockStore = configureStore()(initialState);
  });

  beforeEach(() => {
    mockStore.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={mockStore}>
        <SettingsPage />
      </Provider>
    );
  });

  it('mount renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('does not call store without appropriate container call', () => {
    expect(mockStore.dispatch).toBeCalledTimes(0);
  });

  it('calls store\'s dispatch on NationalitySwitch handleChange call', () => {
    const switchWrapper = wrapper.find(NationalitySwitch);
    const mockedEvent = { target: { name: switchWrapper.props().name }};
    switchWrapper.props().handleChange(mockedEvent);

    expect(mockStore.dispatch).toBeCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      toggleNationality(mockedEvent.target.name)
    );
  });
});