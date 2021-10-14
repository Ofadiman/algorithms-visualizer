import { SagaMiddleware } from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { pathFindingSlice } from './pathFinding/pathFinding.slice'
import { sortingSlice } from './sorting/sorting.slice'

export const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

// eslint-disable-next-line @typescript-eslint/typedef
export const store = configureStore({
  devTools: true,
  // eslint-disable-next-line @typescript-eslint/typedef,@typescript-eslint/explicit-function-return-type
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  reducer: {
    pathFinding: pathFindingSlice.reducer,
    sorting: sortingSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
