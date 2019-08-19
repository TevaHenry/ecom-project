import { all, call } from 'redux-saga/effects'

import { shopSagas } from './Shop/ShopSagas'
import { userSagas } from './User/userSagas'
import { cartSagas } from './Cart/cartSagas'

export default function* rootSaga() {
  yield all([
    call(shopSagas), 
    call(userSagas),
    call(cartSagas)
  ])
}