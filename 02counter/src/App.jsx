import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function addValue() {
    // console.log('click') 
    if (count < 20) {
      
      setCount(count + 1);
    } 
  }

  function removeValue() {
    if (count > 0) {
      
      setCount(count - 1);
    } 
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>counter value : {count}</h3>
      <button onClick={addValue}>Add value</button><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
