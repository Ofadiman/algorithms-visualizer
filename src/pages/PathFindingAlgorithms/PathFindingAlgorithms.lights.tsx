import React, { Fragment, ReactElement } from 'react'

export const PathFindingAlgorithmsLights = (): ReactElement => {
  return (
    <Fragment>
      <ambientLight color={`white`} intensity={0.1} />
      <directionalLight color={`white`} position={[0, 0, 5]} />
      <directionalLight
        castShadow={true}
        color={`white`}
        intensity={0.5}
        position={[0, 10, 0]}
        shadowCameraBottom={-10}
        shadowCameraFar={50}
        shadowCameraLeft={-10}
        shadowCameraRight={10}
        shadowCameraTop={10}
        shadowMapHeight={1_024}
        shadowMapWidth={1_024}
      />
    </Fragment>
  )
}
