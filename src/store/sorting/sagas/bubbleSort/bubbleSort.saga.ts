import { cloneDeep } from 'lodash-es'
import { delay, put, select } from 'typed-redux-saga/macro'

import { sortingStateSelector } from '../../selectors/sortingState.selector'
import { Bar, sortingSlice, SortingState, SortingStatus } from '../../sorting.slice'

const DELAY: number = 500

export function* bubbleSortSaga(): Generator {
  const state: SortingState = yield* select(sortingStateSelector)

  if (state.status === SortingStatus.Paused) {
    return
  }

  if (state.index.first === state.bars.length - 1) {
    yield* put(
      sortingSlice.actions.update({
        active: {
          current: ``,
          next: ``
        }
      })
    )

    return
  }

  if (state.index.second === state.bars.length - 1) {
    yield* delay(DELAY)
    yield* put(
      sortingSlice.actions.update({
        index: {
          first: state.index.first + 1,
          second: 0
        }
      })
    )
  } else {
    const firstBar: Bar = state.bars[state.index.second]
    const secondBar: Bar = state.bars[state.index.second + 1]

    yield* put(
      sortingSlice.actions.update({
        active: {
          current: ``,
          next: ``
        }
      })
    )
    yield* delay(DELAY)

    yield* put(
      sortingSlice.actions.update({
        active: {
          current: firstBar.id
        }
      })
    )
    yield* delay(DELAY)

    yield* put(
      sortingSlice.actions.update({
        active: {
          next: secondBar.id
        }
      })
    )
    yield* delay(DELAY)

    if (firstBar.value > secondBar.value) {
      const newBars: Bar[] = cloneDeep(state.bars)

      const swap: Bar = newBars[state.index.second]
      newBars[state.index.second] = newBars[state.index.second + 1]
      newBars[state.index.second + 1] = swap

      yield* put(
        sortingSlice.actions.update({
          active: {
            current: ``,
            next: ``
          },
          bars: newBars,
          index: {
            second: state.index.second + 1
          }
        })
      )
    } else {
      yield* put(
        sortingSlice.actions.update({
          bars: state.bars,
          index: {
            second: state.index.second + 1
          }
        })
      )
    }
  }

  yield* bubbleSortSaga()
}
