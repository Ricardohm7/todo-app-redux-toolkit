import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p> count is {counter}</p>
      <div className="card">
        <button onClick={() => { dispatch(increment()) }}>
          Increment
        </button>
        <button onClick={() => { dispatch(decrement()) }}>
          Decrement
        </button>
        <button onClick={() => { dispatch(incrementBy(2)) }}>
          Increment By
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
