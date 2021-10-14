import { Button } from '@mui/material'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AxisDebug } from '../../components/AxisDebug/AxisDebug.component'
import { Cubeoid } from '../../components/Cubeoid/Cubeoid.component'
import { RoutePath } from '../../enums/RoutePath.enum'
import { MainLayout } from '../../layouts/Main.layout'
import { Bar, sortingSlice, SortingState } from '../../store/sorting/sorting.slice'
import { AppDispatch, RootState } from '../../store/store'

enum Color {
  Default = `#1156d5`,
  Active = `#d51111`,
  Compare = `#e0d50c`
}

export const SortingAlgorithmsPage = (): ReactElement => {
  const dispatch: AppDispatch = useDispatch()
  const bars: Bar[] = useSelector((state: RootState): Bar[] => state.sorting.bars)
  const active: SortingState['active'] = useSelector((state: RootState): SortingState['active'] => state.sorting.active)

  const handleVisualizeClick = (): void => {
    dispatch(sortingSlice.actions.sortingStart())
  }

  return (
    <MainLayout
      toolbarContent={
        <div>
          <Button color={`inherit`} component={Link} to={RoutePath.PathFindingAlgorithms}>
            {`Path finding algorithms`}
          </Button>
          <Button color={`inherit`} component={Link} to={RoutePath.SortingAlgorithms}>
            {`Sorting algorithms`}
          </Button>
          <Button color={`inherit`} onClick={handleVisualizeClick}>
            {`Visualize`}
          </Button>
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
