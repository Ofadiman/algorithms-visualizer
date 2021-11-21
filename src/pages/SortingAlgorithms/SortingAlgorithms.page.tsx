import { Button } from '@mui/material'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AxisDebug } from '../../components/AxisDebug/AxisDebug.component'
import { Cubeoid } from '../../components/Cubeoid/Cubeoid.component'
import { MainLayout } from '../../layouts/Main.layout'
import { Bar, sortingSlice, SortingState, SortingStatus } from '../../store/sorting/sorting.slice'
import { AppDispatch, RootState } from '../../store/store'

enum Color {
  Default = `#1156d5`,
  Active = `#d51111`,
  Compare = `#e0d50c`
}

const useRandomDatasetOnMount = (dispatch: AppDispatch): void => {
  useEffect((): void => {
    dispatch(sortingSlice.actions.randomizeDataset())
  }, [dispatch])
}

export const SortingAlgorithmsPage = (): ReactElement => {
  const dispatch: AppDispatch = useDispatch()
  const bars: Bar[] = useSelector((state: RootState): Bar[] => state.sorting.bars)
  const active: SortingState['active'] = useSelector((state: RootState): SortingState['active'] => state.sorting.active)
  const status: SortingStatus = useSelector((state: RootState): SortingState['status'] => state.sorting.status)

  const handleBarsRandomization = (): void => {
    dispatch(sortingSlice.actions.randomizeDataset())
  }

  const handleSortingStop = (): void => {
    if (status === SortingStatus.Paused) {
      return
    }

    dispatch(sortingSlice.actions.sortingPause())
  }

  const handleSortingStart = (): void => {
    if (status === SortingStatus.Sorting) {
      return
    }

    dispatch(sortingSlice.actions.sortingStart())
  }

  useRandomDatasetOnMount(dispatch)

  return (
    <MainLayout
      toolbarContent={
        <div>
          {status === SortingStatus.Sorting ? null : (
            <Button color={`inherit`} onClick={handleBarsRandomization}>
              {`Randomize data`}
            </Button>
          )}
          {status === SortingStatus.Idle ? (
            <Button color={`inherit`} onClick={handleSortingStart}>
              {`Visualize`}
            </Button>
          ) : (
            <React.Fragment>
              <Button color={`inherit`} onClick={handleSortingStop}>
                {`Pause`}
              </Button>
              <Button color={`inherit`} onClick={handleSortingStart}>
                {`Resume`}
              </Button>
            </React.Fragment>
          )}
        </div>
      }
    >
      <Canvas camera={{ position: [0, 30, 30] }} style={{ flexGrow: 1 }}>
        <AxisDebug />
        <OrbitControls />
        <ambientLight color={`white`} intensity={0.4} />
        <directionalLight color={`white`} position={[0, 0, 5]} />
        {bars.map((bar: Bar, index: number): ReactElement => {
          let color: Color = Color.Default
          if (active.current === bar.id) {
            color = Color.Active
          }
          if (active.next === bar.id) {
            color = Color.Compare
          }

          const isActive: boolean = active.current === bar.id || active.next === bar.id

          return (
            <Cubeoid
              color={color}
              height={bar.value}
              id={bar.id}
              index={index}
              isActive={isActive}
              key={bar.id}
              shift={bars.length}
            />
          )
        })}
      </Canvas>
    </MainLayout>
  )
}
