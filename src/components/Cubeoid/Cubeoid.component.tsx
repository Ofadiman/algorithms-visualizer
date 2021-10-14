import { animated, useSpring } from '@react-spring/three'
import { RoundedBox } from '@react-three/drei'
import React, { memo, MutableRefObject, NamedExoticComponent, ReactElement, useRef } from 'react'
import { SpringValue } from 'react-spring'
import { Mesh } from 'three'

import { CubeoidProps } from './Cubeoid.component.types'

// eslint-disable-next-line @typescript-eslint/typedef
const AnimatedCuboid = animated(RoundedBox)

export const Cubeoid: NamedExoticComponent<CubeoidProps> = memo((props: CubeoidProps): ReactElement => {
  const leftShift: number = props.shift - 1

  const roundedBoxRef: MutableRefObject<Mesh | null> = useRef(null)
  const spring: { vector: SpringValue<[number, number, number]> } = useSpring({
    vector: [props.index + props.index - leftShift, props.height / 2, props.isActive ? 5 : 0] as [
      number,
      number,
      number
    ]
  })

  const handlePointerDown = (): void => {
    if (props.onPointerDown !== undefined) {
      props.onPointerDown()
    }
  }

  return (
    <AnimatedCuboid
      args={[1, props.height, 1]}
      castShadow={true}
      onPointerDown={handlePointerDown}
      position={spring.vector}
      radius={0.1}
      ref={roundedBoxRef}
      smoothness={4}
    >
      <meshPhongMaterial attach={`material`} color={props.color} wireframe={false} />
    </AnimatedCuboid>
  )
})
