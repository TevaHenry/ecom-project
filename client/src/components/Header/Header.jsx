import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/User/userSelectors';
import { signOutStart } from '../../redux/User/userActions';
import { selectCartHidden } from '../../redux/Cart/cartSelectors';
import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink,
  CartIconContainer
} from './HeaderStyles';

export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      Seasons
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        Shop
      </OptionLink>
      <OptionLink to='/contact'>
        Contact
      </OptionLink>
      {
        currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>Sign out</OptionLink>
         ) : (
        <OptionLink to='/signin'>Sign in</OptionLink> 
      )}
      <CartIconContainer pressed={hidden}>
        <CartIcon />
      </CartIconContainer>
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);