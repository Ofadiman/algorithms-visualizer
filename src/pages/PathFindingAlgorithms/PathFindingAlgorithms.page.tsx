import { Button } from '@mui/material'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Three from 'three'

import { Node, NodeType } from '../../classes/Node'
import { AxisDebug } from '../../components/AxisDebug/AxisDebug.component'
import { Cube } from '../../components/Cube/Cube.component'
import { CUBE_EDGE_SIZE } from '../../const/app.const'
import { MainLayout } from '../../layouts/Main.layout'
import { pathFindingSlice, PathFindingState } from '../../store/pathFinding/pathFinding.slice'
import { AppDispatch, RootState } from '../../store/store'
import { UseStateResult } from '../../types/UseStateResult.type'
import { PathFindingAlgorithmsLights } from './PathFindingAlgorithms.lights'

export const PathFindingAlgorithms = (): ReactElement => {
  const pathFindingState: PathFindingState = useSelector((state: RootState): PathFindingState => state.pathFinding)
  const dispatch: AppDispatch = useDispatch()
  const [nodeUpdateType, setNodeUpdateType]: UseStateResult<NodeType> = useState<NodeType>(NodeType.Start)

  useEffect((): void => {
    dispatch(pathFindingSlice.actions.generateGrid({ cubeShiftFactor: 0.2, cubeSize: CUBE_EDGE_SIZE, size: 10 }))
  }, [dispatch])

  return (
    <MainLayout
      toolbarContent={
        <Fragment>
          <Button
            color={`inherit`}
            onClick={(): void => {
              // debug
            }}
            variant={`text`}
          >
            {`Debug`}
          </Button>
          <Button
            color={`inherit`}
            onClick={(): void => {
              setNodeUpdateType(NodeType.Start)
            }}
            variant={nodeUpdateType === NodeType.Start ? `outlined` : `text`}
          >
            {`Place start`}
          </Button>
          <Button
            color={`inherit`}
            onClick={(): void => {
              setNodeUpdateType(NodeType.Finish)
            }}
            variant={nodeUpdateType === NodeType.Finish ? `outlined` : `text`}
          >
            {`Place finish`}
          </Button>
          <Button
            color={`inherit`}
            onClick={(): void => {
              setNodeUpdateType(NodeType.Obstacle)
            }}
            variant={nodeUpdateType === NodeType.Obstacle ? `outlined` : `text`}
          >
            {`Place obstacle`}
          </Button>
        </Fragment>
      }
    >
      <Canvas camera={{ position: [30, 30, 30] }} style={{ flexGrow: 1 }}>
        <AxisDebug />
        <OrbitControls />
        <PathFindingAlgorithmsLights />
        {pathFindingState.grid.map((node: Node): ReactElement => {
          return (
            <Cube
              key={node.id}
              onPointerDown={(): void => {
                dispatch(pathFindingSlice.actions.setNodeStart({ node: new Node({ ...node, type: nodeUpdateType }) }))
              }}
              position={new Three.Vector3(node.position.x, 0, node.position.z)}
              size={CUBE_EDGE_SIZE}
              type={node.type}
            />
          )
        })}
      </Canvas>
    </MainLayout>
  )
}
