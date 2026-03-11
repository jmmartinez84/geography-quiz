import { useState } from 'react'
import { useQuiz } from '../../hooks/useQuiz'
import { MOUNTAIN_RANGES } from '../../data/mountainRanges'
import { MapSvgOverlay } from '../map/MapSvgOverlay'
import { EncuentraPrompt } from '../quiz/EncuentraPrompt'
import { IdentificaChoices } from '../quiz/IdentificaChoices'
import { FeedbackOverlay } from '../quiz/FeedbackOverlay'
import { ProgressBar } from '../ui/ProgressBar'
import { ScoreBadge } from '../ui/ScoreBadge'
import { ResultScreen } from './ResultScreen'

export function QuizScreen() {
  const { state, currentQuestion, answer, restart, total } = useQuiz()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  if (state.phase === 'complete') {
    return <ResultScreen score={state.score} total={total} onRestart={restart} />
  }

  const targetName = MOUNTAIN_RANGES.find(r => r.id === currentQuestion.targetId)?.name ?? ''

  return (
    <div className="flex flex-col ipad:flex-row h-full bg-slate-900">
      {/* Header bar */}
      <div className="flex ipad:hidden items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <span className="text-white text-sm font-semibold">Cordilleras de España</span>
        <ScoreBadge score={state.score} total={state.currentIndex + (state.phase === 'feedback' ? 1 : 0)} />
      </div>

      {/* Map area */}
      <div className="relative flex-1 ipad:flex-[2] flex items-center justify-center bg-slate-800 overflow-hidden">
        <div className="w-full h-full max-h-full p-1">
          <MapSvgOverlay
            questionType={currentQuestion.type}
            targetId={currentQuestion.targetId}
            selectedId={state.selectedId}
            phase={state.phase}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            onTap={answer}
          />
        </div>
        {/* Feedback overlay on map */}
        {state.phase === 'feedback' && currentQuestion.type === 'encuentra' && (
          <FeedbackOverlay
            correct={!!state.lastAnswerCorrect}
            correctName={targetName}
          />
        )}
      </div>

      {/* Right panel */}
      <div className="relative flex flex-col ipad:w-80 bg-slate-900 border-t ipad:border-t-0 ipad:border-l border-slate-700">
        {/* Desktop header */}
        <div className="hidden ipad:flex items-center justify-between px-5 py-4 border-b border-slate-700">
          <span className="text-white text-sm font-semibold truncate">Cordilleras de España</span>
          <ScoreBadge score={state.score} total={state.currentIndex + (state.phase === 'feedback' ? 1 : 0)} />
        </div>

        {/* Progress */}
        <div className="px-5 py-3 border-b border-slate-700">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Pregunta {state.currentIndex + 1} de {total}</span>
            <span className="capitalize px-2 py-0.5 rounded-full text-xs font-medium
              bg-slate-700 text-slate-300">
              {currentQuestion.type === 'encuentra' ? '👆 Encuentra' : '🔍 Identifica'}
            </span>
          </div>
          <ProgressBar current={state.currentIndex} total={total} />
        </div>

        {/* Question content */}
        <div className="flex-1 min-h-[200px] ipad:min-h-0 relative">
          {currentQuestion.type === 'encuentra' ? (
            <EncuentraPrompt name={targetName} />
          ) : (
            <IdentificaChoices
              choices={currentQuestion.choices!}
              selectedId={state.selectedId}
              targetId={currentQuestion.targetId}
              phase={state.phase}
              onSelect={answer}
            />
          )}
        </div>

        {/* Feedback overlay for identifica mode */}
        {state.phase === 'feedback' && currentQuestion.type === 'identifica' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 z-10 pointer-events-none rounded-b-none ipad:rounded-r-none">
            <div className={`text-5xl mb-3`}>{state.lastAnswerCorrect ? '✓' : '✗'}</div>
            <div className={`font-bold text-xl ${state.lastAnswerCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {state.lastAnswerCorrect ? '¡Correcto!' : 'Incorrecto'}
            </div>
            {!state.lastAnswerCorrect && (
              <div className="text-white/80 text-sm mt-2 text-center px-6">
                Era: <span className="font-semibold text-white">{targetName}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
