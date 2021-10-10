import { cloneDeep } from 'lodash-es'
import { expectSaga, RunResult } from 'redux-saga-test-plan'
import { select } from 'redux-saga-test-plan/matchers'

import { Node, NodeType } from '../../../../classes/Node'
import { generateGrid } from '../../../../functions/generateGrid/generateGrid'
import {
  ChangeFinishNodeAction,
  ChangeStartNodeAction,
  INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
  pathFindingSlice,
  PathFindingState,
  SetNodeFailAction,
  SetNodeStartAction
} from '../../pathFinding.slice'
import { gridSelector } from '../../selectors/grid/grid.selector'
import { setNodeSaga } from './setNode.saga'

const newGrid: Node[] = generateGrid({ cubeShiftFactor: 1, cubeSize: 1, size: 3 })

const startNode: Node = new Node({
  indexes: {
    x: 0,
    z: 0
  },
  position: {
    x: 0,
    z: 0
  },
  type: NodeType.Start
})
const finishNode: Node = new Node({
  indexes: {
    x: 2,
    z: 2
  },
  position: {
    x: 2,
    z: 2
  },
  type: NodeType.Finish
})

const preInitializedGrid: Node[] = generateGrid({ cubeShiftFactor: 1, cubeSize: 1, size: 3 })
preInitializedGrid[0] = startNode
preInitializedGrid[preInitializedGrid.length - 1] = finishNode

describe(`setNodeSaga`, (): void => {
  test(`should throw an error when grid is not initialized`, async (): Promise<void> => {
    const pathFindingState: PathFindingState = {
      ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
      grid: []
    }
    const node: Node = new Node({
      indexes: {
        x: 0,
        z: 0
      },
      position: {
        x: 0,
        z: 0
      },
      type: NodeType.Path
    })
    const setNodeStartAction: SetNodeStartAction = pathFindingSlice.actions.setNodeStart({ node })
    const setNodeFailAction: SetNodeFailAction = pathFindingSlice.actions.setNodeFail()

    const { effects }: RunResult = await expectSaga(setNodeSaga, setNodeStartAction)
      .withReducer(pathFindingSlice.reducer, pathFindingState)
      .provide([[select.selector(gridSelector), []]])
      .select(gridSelector)
      .put(setNodeFailAction)
      .hasFinalState(pathFindingState)
      .run()

    expect(effects).toStrictEqual({})
  })

  test(`should throw an error when trying to update node that does not exist in the grid`, async (): Promise<void> => {
    const pathFindingState: PathFindingState = {
      ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
      grid: newGrid
    }
    const notExistingNode: Node = new Node({
      indexes: {
        x: 13,
        z: 13
      },
      position: {
        x: 39,
        z: 39
      },
      type: NodeType.Path
    })
    const setNodeStartAction: SetNodeStartAction = pathFindingSlice.actions.setNodeStart({ node: notExistingNode })
    const setNodeFailAction: SetNodeFailAction = pathFindingSlice.actions.setNodeFail()

    const { effects }: RunResult = await expectSaga(setNodeSaga, setNodeStartAction)
      .withReducer(pathFindingSlice.reducer, pathFindingState)
      .provide([[select.selector(gridSelector), newGrid]])
      .select(gridSelector)
      .put(setNodeFailAction)
      .hasFinalState(pathFindingState)
      .run()

    expect(effects).toStrictEqual({})
  })

  test(`should do nothing when trying to update a node to the same type`, async (): Promise<void> => {
    const pathFindingState: PathFindingState = {
      ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
      grid: newGrid
    }
    const node: Node = new Node({
      indexes: {
        x: 0,
        z: 0
      },
      position: {
        x: 0,
        z: 0
      },
      type: NodeType.Path
    })
    const setNodeStartAction: SetNodeStartAction = pathFindingSlice.actions.setNodeStart({ node })

    const { effects }: RunResult = await expectSaga(setNodeSaga, setNodeStartAction)
      .withReducer(pathFindingSlice.reducer, pathFindingState)
      .provide([[select.selector(gridSelector), newGrid]])
      .select(gridSelector)
      .hasFinalState(pathFindingState)
      .run()

    expect(effects).toStrictEqual({})
  })

  test(`should throw an error when trying to update node that is not a path`, async (): Promise<void> => {
    const pathFindingState: PathFindingState = {
      ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
      grid: preInitializedGrid
    }
    const newFinishNode: Node = new Node({
      indexes: {
        x: 0,
        z: 0
      },
      position: {
        x: 0,
        z: 0
      },
      type: NodeType.Finish
    })
    const setNodeStartAction: SetNodeStartAction = pathFindingSlice.actions.setNodeStart({ node: newFinishNode })
    const setNodeFailAction: SetNodeFailAction = pathFindingSlice.actions.setNodeFail()

    const { effects }: RunResult = await expectSaga(setNodeSaga, setNodeStartAction)
      .withReducer(pathFindingSlice.reducer, pathFindingState)
      .provide([[select.selector(gridSelector), preInitializedGrid]])
      .select(gridSelector)
      .put(setNodeFailAction)
      .hasFinalState(pathFindingState)
      .run()

    expect(effects).toStrictEqual({})
  })

  test(`should set new start node and replace old start node with path node`, async (): Promise<void> => {
    const pathFindingState: PathFindingState = {
      ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
      grid: preInitializedGrid,
      start: startNode
    }
    const newStartNode: Node = new Node({
      indexes: {
        x: 1,
        z: 1
      },
      position: {
        x: 2,
        z: 2
      },
      type: NodeType.Start
    })
    const setNodeStartAction: SetNodeStartAction = pathFindingSlice.actions.setNodeStart({ node: newStartNode })
    const changeStartNodeAction: ChangeStartNodeAction = pathFindingSlice.actions.changeStartNode({
      index: 4,
      node: newStartNode
    })

    const updatedGrid: Node[] = cloneDeep(preInitializedGrid)
    updatedGrid[0].type = NodeType.Path
    updatedGrid[4].type = NodeType.Start

    const { effects }: RunResult = await expectSaga(setNodeSaga, setNodeStartAction)
      .withReducer(pathFindingSlice.reducer, pathFindingState)
      .provide([[select.selector(gridSelector), preInitializedGrid]])
      .select(gridSelector)
      .put(changeStartNodeAction)
      .hasFinalState({
        ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
        grid: updatedGrid,
        start: newStartNode
      })
      .run()

    expect(effects).toStrictEqual({})
  })

  test(`should set new finish node and replace old finish node with path node`, async (): Promise<void> => {
    const pathFindingState: PathFindingState = {
      ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
      finish: finishNode,
      grid: preInitializedGrid
    }
    const newFinishNode: Node = new Node({
      indexes: {
        x: 1,
        z: 1
      },
      position: {
        x: 2,
        z: 2
      },
      type: NodeType.Finish
    })
    const setNodeStartAction: SetNodeStartAction = pathFindingSlice.actions.setNodeStart({ node: newFinishNode })
    const changeFinishNodeAction: ChangeFinishNodeAction = pathFindingSlice.actions.changeFinishNode({
      index: 4,
      node: newFinishNode
    })

    const updatedGrid: Node[] = cloneDeep(preInitializedGrid)
    updatedGrid[updatedGrid.length - 1].type = NodeType.Path
    updatedGrid[4].type = NodeType.Finish

    const { effects }: RunResult = await expectSaga(setNodeSaga, setNodeStartAction)
      .withReducer(pathFindingSlice.reducer, pathFindingState)
      .provide([[select.selector(gridSelector), preInitializedGrid]])
      .select(gridSelector)
      .put(changeFinishNodeAction)
      .hasFinalState({
        ...INITIAL_PATH_FINDING_SLICE_INITIAL_STATE,
        finish: newFinishNode,
        grid: updatedGrid
      })
      .run()

    expect(effects).toStrictEqual({})
  })
})
