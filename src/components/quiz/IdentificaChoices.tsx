import { MOUNTAIN_RANGES } from '../../data/mountainRanges'

interface Props {
  choices: string[]
  selectedId: string | null
  targetId: string
  phase: 'question' | 'feedback' | 'complete'
  onSelect: (id: string) => void
}

export function IdentificaChoices({ choices, selectedId, targetId, phase, onSelect }: Props) {
  const nameOf = (id: string) => MOUNTAIN_RANGES.find(r => r.id === id)?.name ?? id

  function btnClass(id: string) {
    const base = 'w-full min-h-[72px] rounded-xl px-4 py-3 text-left font-semibold text-sm ipad:text-base transition-all duration-200 border-2'
    if (phase === 'feedback') {
      if (id === targetId) return `${base} bg-green-500 border-green-400 text-white`
      if (id === selectedId) return `${base} bg-red-500 border-red-400 text-white`
      return `${base} bg-slate-700 border-slate-600 text-slate-400 opacity-60`
    }
    return `${base} bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-amber-400 active:scale-95`
  }

  return (
    <div className="flex flex-col h-full justify-center gap-3 px-4">
      <p className="text-slate-300 text-base uppercase tracking-widest font-semibold text-center mb-1">
        ¿Qué cordillera es esta?
      </p>
      <div className="grid grid-cols-1 gap-3">
        {choices.map(id => (
          <button
            key={id}
            className={btnClass(id)}
            onClick={() => phase === 'question' && onSelect(id)}
            disabled={phase !== 'question'}
          >
            {nameOf(id)}
          </button>
        ))}
      </div>
    </div>
  )
}
