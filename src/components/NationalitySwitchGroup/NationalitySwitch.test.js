import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import NationalitySwitch from './NationalitySwitch';

describe('NationalitySwitch', () => {
  let mount;
  let shallow;
  let component;
  let wrapper;
  let handleChangeMock;

  beforeAll(() => {
    shallow = createShallow();
    mount = createMount();
  });

  beforeEach(() => {
    handleChangeMock = jest.fn();
    component = (
      <NationalitySwitch
        checked={false}
        handleChange={handleChangeMock}
        name="polish"
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has correct value of label prop', () => {
    const label = wrapper.find(FormControlLabel).props().label;
    expect(label).toEqual('Polish');
  });

  it('calls change handler on click', () => {
    const wrapper = mount(component);
    wrapper.find(Switch).props().onChange();
    expect(handleChangeMock).toBeCalledTimes(1);
  });

});
