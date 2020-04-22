import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import SuccessSnackbar from './SuccessSnackbar';

describe('SuccessSnackbar', () => {
  let shallow;
  let component;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    component = (
      <SuccessSnackbar
        message="Hello world"
        open={true}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
