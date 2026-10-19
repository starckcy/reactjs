import {useState} from 'react'

const App = () => {

  const [num, setNum] = useState([10, 20, 30])

  const btnclicked = () => {
    const newNum = [...num, 40]
    setNum(newNum)
  }

  const [a, setA] = useState(10)
  const incNum = () => {
    setA(prev => prev+1)
    setA(prev => prev+1)
    setA(prev => prev+1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <h1>{a}</h1>
      <button onClick={btnclicked}>Click</button>
      <button onClick={incNum}>Increment</button>
    </div>
  )
}

export default App