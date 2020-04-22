import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import InfoSnackbar from './InfoSnackbar';

describe('InfoSnackbar', () => {
  let shallow;
  let component;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    component = (
      <InfoSnackbar
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
