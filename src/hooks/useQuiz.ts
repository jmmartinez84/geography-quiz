import { useState, useEffect, useCallback } from 'react'
import { MOUNTAIN_RANGES } from '../data/mountainRanges'
import { generateQuestions } from '../utils/generateQuestions'
import type { QuizState } from '../types/quiz'

const FEEDBACK_DURATION = 1400

function initialState(): QuizState {
  return {
    questions: generateQuestions(MOUNTAIN_RANGES),
    currentIndex: 0,
    score: 0,
    phase: 'question',
    lastAnswerCorrect: null,
    selectedId: null,
  }
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>(initialState)

  const currentQuestion = state.questions[state.currentIndex]

  const answer = useCallback((selectedId: string) => {
    if (state.phase !== 'question') return
    const correct = selectedId === currentQuestion.targetId
    setState(s => ({
      ...s,
      phase: 'feedback',
      lastAnswerCorrect: correct,
      selectedId,
      score: correct ? s.score + 1 : s.score,
    }))
  }, [state.phase, currentQuestion])

  useEffect(() => {
    if (state.phase !== 'feedback') return
    const timer = setTimeout(() => {
      setState(s => {
        const nextIndex = s.currentIndex + 1
        if (nextIndex >= s.questions.length) {
          return { ...s, phase: 'complete' }
        }
        return {
          ...s,
          phase: 'question',
          currentIndex: nextIndex,
          selectedId: null,
          lastAnswerCorrect: null,
        }
      })
    }, FEEDBACK_DURATION)
    return () => clearTimeout(timer)
  }, [state.phase])

  const restart = useCallback(() => {
    setState(initialState())
  }, [])

  return {
    state,
    currentQuestion,
    answer,
    restart,
    total: state.questions.length,
  }
}
