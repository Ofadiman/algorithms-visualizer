import { Node, NodeType } from '../../classes/Node'
import { generateGrid } from './generateGrid'

describe(`generateGrid function`, (): void => {
  test(`should generate grid`, (): void => {
    const grid: Node[] = generateGrid({ cubeShiftFactor: 1, cubeSize: 3, size: 2 })

    expect(grid).toStrictEqual([
      new Node({
        indexes: {
          x: 0,
          z: 0
        },
        position: {
          x: 0,
          z: 0
        },
        type: NodeType.Path
      }),
      new Node({
        indexes: {
          x: 0,
          z: 1
        },
        position: {
          x: 0,
          z: 4
        },
        type: NodeType.Path
      }),
      new Node({
        indexes: {
          x: 1,
          z: 0
        },
        position: {
          x: 4,
          z: 0
        },
        type: NodeType.Path
      }),
      new Node({
        indexes: {
          x: 1,
          z: 1
        },
        position: {
          x: 4,
          z: 4
        },
        type: NodeType.Path
      })
    ])
  })

  test(`should throw an error when grid size is below 2`, (): void => {
    expect((): void => {
      generateGrid({ cubeShiftFactor: 1, cubeSize: 3, size: 1 })
    }).toThrow()
  })

  test(`should throw an error "size" is not an integer`, (): void => {
    expect((): void => {
      generateGrid({ cubeShiftFactor: 1, cubeSize: 3, size: 1.1 })
    }).toThrow()
  })
})
