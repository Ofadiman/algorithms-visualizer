/* eslint-disable react/no-multi-comp */
// Link: https://www.youtube.com/watch?v=fdtqqyeKRJk

import { a, useSpring } from '@react-spring/three'
import { MeshWobbleMaterial, OrbitControls, softShadows } from '@react-three/drei'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { Vector3 } from '@react-three/fiber/dist/declarations/src/three-types'
import React, { Dispatch, ReactElement, RefObject, SetStateAction, useLayoutEffect, useRef, useState } from 'react'
import { SpringValue } from 'react-spring'

import { isMeshPropsRotationThreeEuler } from '../type-guards/isMeshPropsRotationThreeEuler.guard'

type SpinningBoxProps = {
  args?: [number, number, number]
  color: string
  position: [number, number, number]
}

export const SpinningBox = (props: SpinningBoxProps): ReactElement => {
  const [shouldExpand, setShouldExpand]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const meshRef: RefObject<MeshProps | null> = useRef(null)

  const spring: { scale: SpringValue<Vector3> } = useSpring({
    scale: shouldExpand ? ([1.5, 1.5, 1.5] as Vector3) : ([1, 1, 1] as Vector3)
  })

  useFrame((): void => {
    if (isMeshPropsRotationThreeEuler(meshRef)) {
      const currentYRotation: number = meshRef.current.rotation.y
      meshRef.current.rotation.y = currentYRotation + 0.005
      meshRef.current.rotation.x = currentYRotation + 0.005
    }
  })

  return (
    <a.mesh
      castShadow={true}
      onClick={(): void => {
        setShouldExpand((prevShouldExpand: boolean): boolean => {
          return !prevShouldExpand
        })
      }}
      position={props.position}
      ref={meshRef}
      // @ts-expect-error: You must pass spring value for animation to work correctly.
      scale={spring.scale}
    >
      <boxBufferGeometry args={props.args ?? [1, 1, 1]} attach={`geometry`} />
      <MeshWobbleMaterial
        attach={`material`}
        color={props.color}
        factor={0.3}
        morphNormals={undefined}
        morphTargets={undefined}
        skinning={undefined}
        speed={1}
        vertexTangents={undefined}
      />
    </a.mesh>
  )
}

export const TutorialOne = (): ReactElement => {
  useLayoutEffect((): void => {
    softShadows()
  }, [])

  return (
    <Canvas camera={{ fov: 60, position: [-10, 0, 10] }} shadows={true} style={{ height: 1_000 }}>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow={true}
        intensity={1.5}
        position={[0, 10, 0]}
        shadowCameraBottom={-10}
        shadowCameraFar={50}
        shadowCameraLeft={-10}
        shadowCameraRight={10}
        shadowCameraTop={10}
        shadowMapHeight={1_024}
        shadowMapWidth={1_024}
      />
      <pointLight position={[10, 10, 10]} />
      <pointLight intensity={0.5} position={[-10, 0, -20]} />
      <pointLight intensity={1.5} position={[0, -10, 0]} />
      <group>
        <mesh position={[0, -5, 0]} receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry args={[100, 100]} attach={`geometry`} />
          <shadowMaterial attach={`material`} opacity={0.3} />
        </mesh>
      </group>
      <SpinningBox args={[4, 2, 4]} color={`orange`} position={[0, 0, 0]} />
      <SpinningBox color={`violet`} position={[-5, 0, -5]} />
      <SpinningBox color={`violet`} position={[5, 0, 5]} />
    </Canvas>
  )
}
