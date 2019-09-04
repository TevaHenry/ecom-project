import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/Cart/cartSelectors';
import { toggleCartHidden } from '../../redux/Cart/cartActions';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer
} from './CartDropdownStyles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) 
        : 
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
      >Go to checkout</CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));