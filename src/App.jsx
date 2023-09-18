import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  return (
    <div className ='App'>
      <Counter/>
    </div>
  )
}


const Counter = () => {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Increment inc={increase}/>
      <Decrement dec={decrease}/>
    </div>
   )
}


const Increment = (props) => {
  return (
    <button onClick={props.inc}>Add</button>
  )
}


const Decrement = (props) => {
  return(
    <button onClick ={props.dec}>Subtract</button>
  )
}

export default App
