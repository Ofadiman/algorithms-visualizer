import * as Three from 'three'

import { NodeType } from '../../classes/Node'

export type CubeProps = {
  onPointerDown?: () => void
  position: Three.Vector3
  size: number
  type: NodeType
}
