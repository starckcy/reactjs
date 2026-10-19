import {useState} from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function incNum() {
    setNum(num + 1)
  }

  function decNum() {
    setNum(num - 1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incNum}>increase</button>
      <button onClick={decNum}>decrease</button>
    </div>
  )
}

export default App