import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/Cart/cartActions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckoutItemStyles';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const  { imageUrl, name, price, quantity } = cartItem;
  return (
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt="item"/>
    </ImageContainer>
    <TextContainer className="name">{name}</TextContainer>
    <QuantityContainer>
      <div onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span>{quantity}</span>
      <div onClick={() => addItem(cartItem)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>${price}</TextContainer>
    <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);