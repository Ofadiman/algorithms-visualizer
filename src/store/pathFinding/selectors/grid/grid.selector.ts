import { createSelector, OutputSelector } from '@reduxjs/toolkit'

import { Node } from '../../../../classes/Node'
import { RootState } from '../../../store'
import { PathFindingState } from '../../pathFinding.slice'

export const gridSelector: OutputSelector<RootState, Node[], (result: PathFindingState) => Node[]> = createSelector(
  (state: RootState): PathFindingState => state.pathFinding,
  (pathFindingState: PathFindingState): Node[] => {
    return pathFindingState.grid
  }
)
