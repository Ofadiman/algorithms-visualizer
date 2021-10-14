import { all, fork } from 'typed-redux-saga/macro'

import { pathFindingMasterSaga } from './pathFinding/pathFinding.saga'
import { sortingMasterSaga } from './sorting/sorting.saga'

export function* rootSaga(): Generator {
  yield all([fork(pathFindingMasterSaga), fork(sortingMasterSaga)])
}
