import { useState } from 'react'
import './App.css'
import Sentences from './components/Sentences.jsx'
import DisplaySentences from './components/DisplaySentences.jsx'

function App() {
  const [sentence, setSentence] = useState('')

  function writeSentence() {
    setSentence('I will never mutate state or props directly')
  }

  return (
    <div>
      <h1>Detention!</h1>
      <Sentences handleClick={writeSentence}/>
      <ul className='sentences'>
        <DisplaySentences lines={sentence} />
      </ul>
    </div>
  )
}

export default App