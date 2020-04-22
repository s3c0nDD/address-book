import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import NationalitySwitch from './NationalitySwitch';
import NationalitySwitchGroup from './NationalitySwitchGroup';

describe('NationalitySwitchGroup', () => {
  let shallow;
  let component;
  let wrapper;
  let toggleMock;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    toggleMock = jest.fn();
    component = (
      <NationalitySwitchGroup
        nationalities={{
          polish: true
        }}
        onToggleNationality={toggleMock}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls change handler on NationalitySwitch click', () => {
    const switchWrapper = wrapper.find(NationalitySwitch);
    const mockedEvent = { target: { name: switchWrapper.props().name }};
    switchWrapper.props().handleChange(mockedEvent);
    expect(toggleMock).toBeCalledTimes(1);
  });
});
