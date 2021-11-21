import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import faker from 'faker'
import { Draft } from 'immer'

import { SliceName } from '../../enums/SliceName.enum'

export enum SortingStatus {
  Sorting = `Sorting`,
  Paused = `Paused`,
  Idle = `Idle`
}

export type Bar = {
  id: string
  value: number
}

export type SortingState = {
  active: {
    current: string
    next: string
  }
  bars: Bar[]
  index: {
    first: number
    second: number
  }
  status: SortingStatus
}

export const INITIAL_SORTING_SLICE_STATE: SortingState = {
  active: {
    current: ``,
    next: ``
  },
  bars: [],
  index: {
    first: 0,
    second: 0
  },
  status: SortingStatus.Idle
}

// eslint-disable-next-line @typescript-eslint/typedef
export const sortingSlice = createSlice({
  initialState: INITIAL_SORTING_SLICE_STATE,
  name: SliceName.Sorting,
  reducers: {
    randomizeDataset: (state: Draft<SortingState>): void => {
      const dataset: Bar[] = Array.from({ length: 20 })
        .fill(null)
        .map((): Bar => {
          const value: number = faker.datatype.number({ max: 20, min: 1, precision: 1 })
          const id: string = faker.datatype.uuid()

          return {
            id,
            value
          }
        })

      state.bars = dataset
    },
    sortingPause: (state: Draft<SortingState>): void => {
      state.status = SortingStatus.Paused
    },
    sortingStart: (state: Draft<SortingState>): void => {
      state.status = SortingStatus.Sorting
    },
    update: (
      state: Draft<SortingState>,
      action: PayloadAction<{
        active?: Partial<SortingState['active']>
        bars?: SortingState['bars']
        index?: Partial<SortingState['index']>
      }>
    ): void => {
      state.active.current = action.payload.active?.current ?? state.active.current
      state.active.next = action.payload.active?.next ?? state.active.next
      state.index.first = action.payload.index?.first ?? state.index.first
      state.index.second = action.payload.index?.second ?? state.index.second
      state.bars = action.payload.bars ?? state.bars
    }
  }
})
