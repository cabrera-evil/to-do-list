import { useState } from 'react'
import Container from './Components/Container/Container'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container />
    </div>
  )
}

export default App
