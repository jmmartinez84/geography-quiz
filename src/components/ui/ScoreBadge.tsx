interface Props {
  score: number
  total: number
}

export function ScoreBadge({ score, total }: Props) {
  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      <span className="text-amber-400">{score}</span>
      <span className="text-slate-400">/ {total}</span>
    </div>
  )
}
