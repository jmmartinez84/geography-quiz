interface Props {
  onStart: () => void
}

export function StartScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-900 px-8 gap-8">
      <div className="text-center">
        <div className="text-6xl mb-4">🗺️</div>
        <h1 className="text-white font-bold text-3xl ipad:text-4xl mb-3">
          Cordilleras de España
        </h1>
        <p className="text-slate-300 text-base max-w-md">
          Pon a prueba tus conocimientos sobre las principales cordilleras y sistemas montañosos de España
        </p>
      </div>

      <div className="flex flex-col gap-3 text-slate-400 text-sm text-center">
        <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-3">
          <span className="text-2xl">👆</span>
          <span><strong className="text-white">Encuentra</strong> — toca la región correcta en el mapa</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-3">
          <span className="text-2xl">🔍</span>
          <span><strong className="text-white">Identifica</strong> — elige el nombre de la región destacada</span>
        </div>
        <div className="text-slate-500 mt-1">26 preguntas · 13 cordilleras</div>
      </div>

      <button
        onClick={onStart}
        className="bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-900 font-bold text-xl px-12 py-4 rounded-2xl transition-all duration-150 shadow-lg"
      >
        Comenzar Quiz
      </button>
    </div>
  )
}
