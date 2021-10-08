import { MeshProps } from '@react-three/fiber'
import * as Three from 'three'

import { hasCurrentProperty } from './hasCurrentProperty.guard'
import { hasRotationProperty } from './hasRotationProperty.guard'

/**
 * Type guard that makes sure that the `rotation` property on `MeshProps` interface is of type `Euler`.
 */
export const isMeshPropsRotationThreeEuler = (
  value: unknown
): value is { current: MeshProps & { rotation: Three.Euler } } => {
  if (hasCurrentProperty(value) && hasRotationProperty(value)) {
    return value.current.rotation !== undefined && value.current.rotation instanceof Three.Euler
  }

  return false
}
