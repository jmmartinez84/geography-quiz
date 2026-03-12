import type { MountainRange } from '../../types/quiz'

type RegionState = 'idle' | 'hover' | 'correct' | 'wrong' | 'reveal' | 'highlight' | 'disabled' | 'hint'

interface Props {
  range: MountainRange
  state: RegionState
}

export function RegionPolygon({ range, state }: Props) {
  const pts = range.polygon.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <polygon
      points={pts}
      className={`region-${state}`}
      style={{ transition: 'fill 0.2s, stroke 0.2s' }}
    />
  )
}
