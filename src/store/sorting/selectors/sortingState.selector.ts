import { createSelector, OutputSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { SortingState } from '../sorting.slice'

export const sortingStateSelector: OutputSelector<RootState, SortingState, (result: SortingState) => SortingState> =
  createSelector(
    (state: RootState): SortingState => state.sorting,
    (sortingState: SortingState): SortingState => sortingState
  )
