import { all, takeEvery } from 'typed-redux-saga/macro'

import { pathFindingSlice } from './pathFinding.slice'
import { setNodeSaga } from './sagas/setNode/setNode.saga'

export function* pathFindingMasterSaga(): Generator {
  yield all([takeEvery(pathFindingSlice.actions.setNodeStart.type, setNodeSaga)])
}
