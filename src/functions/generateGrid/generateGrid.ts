import { Node, NodeType } from '../../classes/Node'

export type GenerateGridArgs = {
  // A number that determines how far apart the cubes will be from each other.
  cubeShiftFactor: number
  cubeSize: number
  size: number
}

export const generateGrid = (args: GenerateGridArgs): Node[] => {
  const isSizeInteger: boolean = Number.isInteger(args.size)
  if (!isSizeInteger) {
    throw new Error(`"size" must be an integer! Received: ${args.size}.`)
  }
  if (args.size < 2) {
    throw new Error(`"size" cannot be below 2! Received: ${args.size}.`)
  }
  const newGrid: Node[] = []

  for (let x: number = 0; x < args.size; x++) {
    for (let z: number = 0; z < args.size; z++) {
      const baseXPosition: number = x * args.cubeSize
      const baseZPosition: number = z * args.cubeSize

      const XShift: number = x * args.cubeShiftFactor
      const ZShift: number = z * args.cubeShiftFactor

      const xPosition: number = baseXPosition + XShift
      const zPosition: number = baseZPosition + ZShift

      const node: Node = new Node({
        indexes: { x, z },
        position: { x: xPosition, z: zPosition },
        type: NodeType.Path
      })

      newGrid.push(node)
    }
  }

  return newGrid
}
