import { put, select } from 'typed-redux-saga/macro'

import { Node, NodeType } from '../../../../classes/Node'
import { pathFindingSlice, SetNodeStartAction } from '../../pathFinding.slice'
import { gridSelector } from '../../selectors/grid/grid.selector'

export function* setNodeSaga(action: SetNodeStartAction): Generator {
  const grid: Node[] = yield* select(gridSelector)

  try {
    if (grid.length === 0) {
      throw new Error(`Grid not initialized!`)
    }

    const nodeIndex: number = grid.findIndex((node: Node): boolean => {
      return node.id === action.payload.node.id
    })

    if (nodeIndex === -1) {
      throw new Error(`Node not found!`)
    }

    const node: Node = grid[nodeIndex]
    if (node.type === action.payload.node.type) {
      return
    }

    if (node.type !== NodeType.Path) {
      throw new Error(`Node cannot be updated because it's not a path.`)
    }

    switch (action.payload.node.type) {
      case NodeType.Start: {
        yield* put(pathFindingSlice.actions.changeStartNode({ index: nodeIndex, node: action.payload.node }))
        break
      }

      case NodeType.Finish: {
        yield* put(pathFindingSlice.actions.changeFinishNode({ index: nodeIndex, node: action.payload.node }))
        break
      }

      default: {
        yield* put(pathFindingSlice.actions.setNodeSuccess({ index: nodeIndex, node: action.payload.node }))
        break
      }
    }
  } catch {
    yield* put(pathFindingSlice.actions.setNodeFail())
  }
}
