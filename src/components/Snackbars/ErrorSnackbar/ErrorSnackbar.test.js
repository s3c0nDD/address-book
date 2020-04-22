import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';

import Button from '@material-ui/core/Button';

import ErrorSnackbar from './ErrorSnackbar';

describe('ErrorSnackbar', () => {
  let mount;
  let shallow;
  let component;
  let wrapper;
  let reloadMock;

  beforeAll(() => {
    shallow = createShallow();
    mount = createMount();
    reloadMock = jest.fn();
    jest.spyOn(window.location, 'reload').mockImplementation(reloadMock);
  });

  beforeEach(() => {
    component = (
      <ErrorSnackbar
        open={true}
      />
    );
    wrapper = shallow(component);
  });

  afterAll(() => {
    window.location.reload.mockClear();
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls reload handler on action Button click', () => {
    const wrapper = mount(component);
    const buttonWrapper = wrapper.find(Button);
    buttonWrapper.props().onClick();
    expect(reloadMock).toBeCalledTimes(1);
  });
});
