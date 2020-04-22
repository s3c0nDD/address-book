import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import CommonSnackbar from './CommonSnackbar';

describe('CommonSnackbar', () => {
  let shallow;
  let component;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    component = (
      <CommonSnackbar
        message="Hello world"
        open={true}
        severity="info"
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('does pass prop open to Snackbar', () => {
    const open = wrapper.find(Snackbar).props().open;
    expect(open).toEqual(true);
  });

  it('has correct value of message inside Alert', () => {
    const label = wrapper.find(Alert).text();
    expect(label).toEqual('Hello world');
  });
});
