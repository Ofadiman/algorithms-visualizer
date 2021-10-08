import { isRecord } from './isRecord.guard'

export const hasCurrentProperty = (value: unknown): value is { current: unknown } => {
  if (isRecord(value)) {
    return Boolean(value.current)
  }

  return false
}
