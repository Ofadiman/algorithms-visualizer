export type NodeConstructorArgs = {
  indexes: Indexes
  position: Position
  type: NodeType
}

export type Position = {
  x: number
  z: number
}

export type Indexes = {
  x: number
  z: number
}

export enum NodeType {
  Finish = `Finish`,
  Start = `Start`,
  Path = `Path`,
  Visited = `Visited`,
  Obstacle = `Obstacle`
}

export class Node {
  public type: NodeType
  public position: Position
  public indexes: Indexes
  public id: string

  public constructor(args: NodeConstructorArgs) {
    this.type = args.type
    this.position = args.position
    this.indexes = args.indexes
    this.id = `${args.indexes.x}-${args.indexes.z}`
  }
}
