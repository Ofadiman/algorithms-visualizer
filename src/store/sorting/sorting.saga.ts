import { all, takeEvery } from 'typed-redux-saga/macro'

import { bubbleSortSaga } from './sagas/bubbleSort/bubbleSort.saga'
import { sortingSlice } from './sorting.slice'

export function* sortingMasterSaga(): Generator {
  yield all([takeEvery(sortingSlice.actions.sortingStart.type, bubbleSortSaga)])
}
