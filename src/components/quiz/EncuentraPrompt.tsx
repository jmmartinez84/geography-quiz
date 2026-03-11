interface Props {
  name: string
}

export function EncuentraPrompt({ name }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
      <p className="text-slate-300 text-base uppercase tracking-widest font-semibold">
        ¿Dónde está?
      </p>
      <h2 className="text-white font-bold text-2xl ipad:text-3xl text-center leading-tight">
        {name}
      </h2>
      <p className="text-slate-400 text-sm text-center mt-2">
        Toca la región correcta en el mapa
      </p>
      <div className="text-3xl mt-2 animate-bounce">👆</div>
    </div>
  )
}
