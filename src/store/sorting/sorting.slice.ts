import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  bars: [
    { id: `17-421vr1v3`, value: 17 },
    { id: `1-21brb3rb`, value: 1 },
    { id: `16-13rb35h35h1`, value: 16 },
    { id: `11-13rc3re`, value: 11 },
    { id: `6-13b3rgh3rg`, value: 6 },
    { id: `19-13rg3c3r`, value: 19 },
    { id: `22-13rv13r`, value: 22 },
    { id: `8-ebdgstjsrb`, value: 8 },
    { id: `4-setbs`, value: 4 },
    { id: `14-aghaegaf`, value: 14 },
    { id: `15-ahrethetaehae`, value: 15 },
    { id: `11-haethaetha`, value: 11 },
    { id: `5-cxbvcbxdth`, value: 5 },
    { id: `14-dfgsergdfdd`, value: 14 },
    { id: `11-fsgsfdg`, value: 11 }
  ],
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
