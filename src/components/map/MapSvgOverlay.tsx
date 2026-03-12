import { useRef } from 'react'
import { MOUNTAIN_RANGES, HIT_TEST_ORDER } from '../../data/mountainRanges'
import { SpainBackground } from './SpainBackground'
import { RegionPolygon } from './RegionPolygon'
import { pointInPolygon } from '../../utils/pointInPolygon'
import type { QuestionType } from '../../types/quiz'

const VIEWBOX_W = 900
const VIEWBOX_H = 680

type RegionState = 'idle' | 'hover' | 'correct' | 'wrong' | 'reveal' | 'highlight' | 'disabled' | 'hint'

interface Props {
  questionType: QuestionType | null
  targetId: string | null
  selectedId: string | null
  phase: 'question' | 'feedback' | 'complete'
  hoveredId: string | null
  showHint: boolean
  onHover: (id: string | null) => void
  onTap: (id: string) => void
  onMiss: () => void
}

export function MapSvgOverlay({
  questionType,
  targetId,
  selectedId,
  phase,
  hoveredId,
  showHint,
  onHover,
  onTap,
  onMiss,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null)

  function getState(id: string): RegionState {
    if (questionType === 'identifica') {
      return id === targetId ? 'highlight' : 'disabled'
    }
    // encuentra mode
    if (phase === 'feedback') {
      if (id === targetId) return 'correct'
      if (id === selectedId) return 'wrong'
      return 'idle'
    }
    if (phase === 'question') {
      if (id === hoveredId) return 'hover'
      if (showHint) return 'hint'
      return 'idle'
    }
    return 'idle'
  }

  function toSvgCoords(clientX: number, clientY: number): [number, number] | null {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    const px = ((clientX - rect.left) / rect.width) * VIEWBOX_W
    const py = ((clientY - rect.top) / rect.height) * VIEWBOX_H
    return [px, py]
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (questionType !== 'encuentra' || phase !== 'question') return
    const coords = toSvgCoords(e.clientX, e.clientY)
    if (!coords) return
    const [px, py] = coords
    for (const id of HIT_TEST_ORDER) {
      const range = MOUNTAIN_RANGES.find(r => r.id === id)!
      if (pointInPolygon(px, py, range.polygon)) {
        onHover(id)
        return
      }
    }
    onHover(null)
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (questionType !== 'encuentra' || phase !== 'question') return
    const coords = toSvgCoords(e.clientX, e.clientY)
    if (!coords) return
    const [px, py] = coords
    for (const id of HIT_TEST_ORDER) {
      const range = MOUNTAIN_RANGES.find(r => r.id === id)!
      if (pointInPolygon(px, py, range.polygon)) {
        onTap(id)
        return
      }
    }
    onMiss()
  }

  function handlePointerLeave() {
    onHover(null)
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
      style={{ cursor: questionType === 'encuentra' && phase === 'question' ? 'crosshair' : 'default' }}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
    >
      <SpainBackground />
      {MOUNTAIN_RANGES.map(range => (
        <RegionPolygon key={range.id} range={range} state={getState(range.id)} />
      ))}
      {/* Labels for identifica mode */}
      {questionType === 'identifica' && targetId && (() => {
        const range = MOUNTAIN_RANGES.find(r => r.id === targetId)!
        return (
          <text
            x={range.centroid[0]}
            y={range.centroid[1]}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fontWeight="bold"
            fill="white"
            stroke="#1e3a5f"
            strokeWidth="3"
            paintOrder="stroke"
            style={{ pointerEvents: 'none' }}
          >
            ?
          </text>
        )
      })()}
    </svg>
  )
}
