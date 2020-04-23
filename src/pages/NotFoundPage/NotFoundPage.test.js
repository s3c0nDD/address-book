import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import NotFoundPage from './NotFoundPage'

describe('NotFoundPage', () => {
  let shallow;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    wrapper = shallow(
      <NotFoundPage />
    );
  });

  afterEach(() => {
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});