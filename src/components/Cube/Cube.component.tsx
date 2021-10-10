import { blue, green, grey, purple, red } from '@mui/material/colors'
import { RoundedBox } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events'
import React, { ReactElement } from 'react'

import { NodeType } from '../../classes/Node'
import { CubeProps } from './Cube.component.types'

const getCubeColor = (type: NodeType): string => {
  switch (type) {
    case NodeType.Finish: {
      return red[800]
    }
    case NodeType.Start: {
      return blue[500]
    }
    case NodeType.Visited: {
      return green[500]
    }
    case NodeType.Obstacle: {
      return grey[500]
    }
    case NodeType.Path: {
      return purple[200]
    }
    default: {
      throw new Error(`Something went wrong while getting cube color.`)
    }
  }
}

export const Cube = (props: CubeProps): ReactElement => {
  return (
    <RoundedBox
      args={[props.size, props.size, props.size]}
      castShadow={true}
      onPointerDown={(event: ThreeEvent<PointerEvent>): void => {
        event.stopPropagation()
        if (props.onPointerDown !== undefined) {
          props.onPointerDown()
        }
      }}
      position={props.position}
      radius={0.1}
      smoothness={4}
    >
      <meshPhongMaterial attach={`material`} color={getCubeColor(props.type)} wireframe={false} />
    </RoundedBox>
  )
}
