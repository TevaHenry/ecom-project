import { shallow } from 'enzyme';
import React from 'react';
import SignInAndSignUp from './SignInAndSignUp';

it('expect to render SignInAndSignUp component', () => {
  expect(shallow(<SignInAndSignUp />)).toMatchSnapshot()
})