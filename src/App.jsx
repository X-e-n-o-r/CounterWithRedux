import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }
  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={() => getCash(Number(prompt()))}>-</button>
      <button onClick={() => addCash(Number(prompt()))}>+</button>
    </div>
  )
}

export default App
