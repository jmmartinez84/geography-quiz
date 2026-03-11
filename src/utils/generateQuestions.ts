import type { MountainRange, Question } from '../types/quiz'
import { shuffle, sampleN } from './shuffle'

export function generateQuestions(ranges: MountainRange[]): Question[] {
  const ids = ranges.map(r => r.id)

  const encuentraQuestions: Question[] = ranges.map(r => ({
    type: 'encuentra',
    targetId: r.id,
  }))

  const identificaQuestions: Question[] = ranges.map(r => {
    const distractors = sampleN(ids.filter(id => id !== r.id), 3)
    return {
      type: 'identifica',
      targetId: r.id,
      choices: shuffle([r.id, ...distractors]),
    }
  })

  return shuffle([...encuentraQuestions, ...identificaQuestions])
}
