import { hasCurrentProperty } from './hasCurrentProperty.guard'
import { isRecord } from './isRecord.guard'

export const hasRotationProperty = (value: unknown): value is { current: { rotation: unknown } } => {
  if (hasCurrentProperty(value) && isRecord(value.current)) {
    return Boolean(value.current.rotation)
  }

  return false
}
