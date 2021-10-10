import React, { ReactElement } from 'react'

export const AxisDebug = (): ReactElement | null => {
  return process.env.NODE_ENV === `production` ? null : <axesHelper args={[10]} />
}
