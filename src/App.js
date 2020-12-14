import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './counter'

const App = () => {
  
  const count = useSelector((state) => state.counter.count)

  return (
    <div className="App">
      <h1>Redux counter</h1>
      <h2>Count: {count}</h2>
      <Counter />
    </div>
  )
}

export default App;
