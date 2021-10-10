import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft } from 'immer'

import { Node, NodeType } from '../../classes/Node'
import { generateGrid, GenerateGridArgs } from '../../functions/generateGrid/generateGrid'

export type PathFindingState = {
  finish: Node | null
  grid: Node[]
  start: Node | null
}

export const INITIAL_PATH_FINDING_SLICE_INITIAL_STATE: PathFindingState = {
  finish: null,
  grid: [],
  start: null
}

export const PATH_FINDING_SLICE_NAME: string = `pathFindingSlice`

export type GenerateGridAction = PayloadAction<GenerateGridArgs>
export type SetNodeFailAction = PayloadAction
export type SetNodeStartAction = PayloadAction<{ node: Node }>
export type SetNodeSuccessAction = PayloadAction<{ index: number; node: Node }>
export type ChangeStartNodeAction = PayloadAction<{ index: number; node: Node }>
export type ChangeFinishNodeAction = PayloadAction<{ index: number; node: Node }>

// eslint-disable-next-line @typescript-eslint/typedef
export const pathFindingSlice = createSlice({
  initialState: INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
  name: PATH_FINDING_SLICE_NAME,
  reducers: {
    changeFinishNode: (state: Draft<PathFindingState>, action: ChangeFinishNodeAction): void => {
      state.grid = state.grid.map((node: Node, index: number): Node => {
        if (node.type === NodeType.Finish) {
          node.type = NodeType.Path

          return node
        }

        if (index === action.payload.index) {
          return action.payload.node
        }

        return node
      })

      state.finish = action.payload.node
    },
    changeStartNode: (state: Draft<PathFindingState>, action: ChangeStartNodeAction): void => {
      state.grid = state.grid.map((node: Node, index: number): Node => {
        if (node.type === NodeType.Start) {
          node.type = NodeType.Path

          return node
        }

        if (index === action.payload.index) {
          return action.payload.node
        }

        return node
      })
      state.start = action.payload.node
    },
    generateGrid: (state: Draft<PathFindingState>, action: GenerateGridAction): void => {
      state.grid = generateGrid(action.payload)
    },
    setNodeFail: (_state: Draft<PathFindingState>, _action: SetNodeFailAction): void => {
      // eslint
    },
    setNodeStart: (_state: Draft<PathFindingState>, _action: SetNodeStartAction): void => {
      // eslint
    },
    setNodeSuccess: (state: Draft<PathFindingState>, action: SetNodeSuccessAction): void => {
      state.grid = state.grid.map((node: Node, index: number): Node => {
        if (index === action.payload.index) {
          return action.payload.node
        }

        return node
      })
    }
  }
})
