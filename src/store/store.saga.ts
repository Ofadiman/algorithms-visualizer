import { all, fork } from 'typed-redux-saga/macro'

import { pathFindingMasterSaga } from './pathFinding/pathFinding.saga'

export function* rootSaga(): Generator {
  yield all([fork(pathFindingMasterSaga)])
}
