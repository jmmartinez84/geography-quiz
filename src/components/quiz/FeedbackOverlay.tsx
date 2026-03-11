interface Props {
  correct: boolean
  correctName: string
}

export function FeedbackOverlay({ correct, correctName }: Props) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10 pointer-events-none
        ${correct ? 'bg-green-500/80' : 'bg-red-500/80'}`}
    >
      <div className="text-4xl mb-2">{correct ? '✓' : '✗'}</div>
      <div className="text-white font-bold text-xl text-center px-4">
        {correct ? '¡Correcto!' : 'Incorrecto'}
      </div>
      {!correct && (
        <div className="text-white/90 text-sm mt-1 text-center px-4">
          Era: <span className="font-semibold">{correctName}</span>
        </div>
      )}
    </div>
  )
}
