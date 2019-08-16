import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import {
  CheckoutPageContainer, 
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TestWarningContainer, 
  CheckoutTotalContainer
} from './CheckoutPageStyles';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Descriptioon</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <CheckoutTotalContainer>Total: ${cartTotal}</CheckoutTotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);