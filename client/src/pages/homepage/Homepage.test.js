import { shallow } from 'enzyme';
import React from 'react';
import Homepage from './Homepage';

it('expect to render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot()
})