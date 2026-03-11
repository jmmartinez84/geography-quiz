import { useState } from 'react'
import { StartScreen } from './components/screens/StartScreen'
import { QuizScreen } from './components/screens/QuizScreen'

type Screen = 'start' | 'quiz'

export default function App() {
  const [screen, setScreen] = useState<Screen>('start')

  return (
    <div className="w-full h-full">
      {screen === 'start' ? (
        <StartScreen onStart={() => setScreen('quiz')} />
      ) : (
        <QuizScreen key={screen} />
      )}
    </div>
  )
}
