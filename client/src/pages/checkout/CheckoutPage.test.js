import { shallow } from 'enzyme';
import React from 'react';
import { CheckoutPage } from './CheckoutPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  };

  wrapper = shallow(<CheckoutPage {...mockProps} />);
});

it('expect to render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot()
})