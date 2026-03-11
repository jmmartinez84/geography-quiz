interface Props {
  score: number
  total: number
  onRestart: () => void
}

function getMessage(score: number, total: number) {
  const pct = score / total
  if (pct === 1) return { emoji: '🏆', text: '¡Perfecto! ¡Eres un experto en geografía española!' }
  if (pct >= 0.8) return { emoji: '⭐', text: '¡Excelente! Conoces muy bien las cordilleras.' }
  if (pct >= 0.6) return { emoji: '👍', text: '¡Bien hecho! Sigue practicando.' }
  if (pct >= 0.4) return { emoji: '📚', text: 'Puedes mejorar. ¡Vuelve a intentarlo!' }
  return { emoji: '💪', text: 'Sigue estudiando. ¡Tú puedes!' }
}

export function ResultScreen({ score, total, onRestart }: Props) {
  const { emoji, text } = getMessage(score, total)
  const pct = Math.round((score / total) * 100)

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-900 px-8 gap-8">
      <div className="text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h1 className="text-white font-bold text-3xl ipad:text-4xl mb-2">
          Quiz completado
        </h1>
        <p className="text-slate-300 text-base max-w-sm">{text}</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="text-7xl font-bold text-amber-400">{score}</div>
        <div className="text-slate-400 text-lg">de {total} respuestas correctas</div>
        <div className="text-slate-500 text-sm">{pct}% de aciertos</div>
      </div>

      {/* Score bar */}
      <div className="w-64 bg-slate-700 rounded-full h-4">
        <div
          className="bg-amber-400 h-4 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      <button
        onClick={onRestart}
        className="bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-900 font-bold text-xl px-12 py-4 rounded-2xl transition-all duration-150 shadow-lg"
      >
        Volver a intentar
      </button>
    </div>
  )
}
