import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function checkNumber() {
    if (count >= 0) {
      return count
    } else {
      // Lets make sure count is set to zero using set state
      setCount((count) => count = 0)
      // This set state will cause a re-reneder of the UI calling checkNumber again with the count of 0
      // Making the (count >= 0) if statement true 
    }
  }
  function clamp(n){
    return n < 0 ? 0 : n;
  }

  return (
    <>
      <div>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>count is {checkNumber()}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          {console.log(count)}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
