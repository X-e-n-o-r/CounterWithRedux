import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const minus = () => {
    setCount(count - 1)
  }
  const plus = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default App
