import { takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../User/userTypes';
import { clearCart } from './cartActions';
import { clearCartOnSignOut, onSignOutSuccess } from './cartSagas';

describe('on signout success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});