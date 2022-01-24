import { useState } from 'react'
import AppRouter from './containers/AppRouter'
import Navbar from './containers/Navbar'
import { AppContext } from "./context"
import './App.css'

const App = () => {
  const [lives, setLives] = useState()
  const [correctAnswers, setCorrectAnswers] = useState()

  return (
    <AppContext.Provider value={{
      lives,
      setLives,
      correctAnswers,
      setCorrectAnswers
    }}>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
}

export default App
