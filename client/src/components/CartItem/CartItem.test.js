import { shallow } from 'enzyme';
import React from 'react';
import CartItem from './CartItem';

it('expect to render CartItem component', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 33,
    name: 'hats',
    quantity: 3
  };

  expect(shallow(<CartItem item={mockItem}/>)).toMatchSnapshot()
})