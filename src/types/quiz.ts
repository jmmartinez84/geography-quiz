export interface MountainRange {
  id: string
  name: string
  polygon: [number, number][]
  centroid: [number, number]
}

export type QuestionType = 'encuentra' | 'identifica'

export interface Question {
  type: QuestionType
  targetId: string
  choices?: string[]
}

export type QuizPhase = 'question' | 'feedback' | 'complete'

export interface QuizState {
  questions: Question[]
  currentIndex: number
  score: number
  phase: QuizPhase
  lastAnswerCorrect: boolean | null
  selectedId: string | null
}
