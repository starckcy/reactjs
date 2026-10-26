import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  useEffect(function(){
    console.log('useEffect called')
  }, [num])

  return (
    <div>
      <h1>num1: {num}</h1>
      <h1>num2: {num2}</h1>
      <button onClick={() => {
        setNum(num + 1)
        }}
        onMouseEnter={() => {
          setNum2(num2 + 10)
        }}
      >
        Click
      </button>
    </div>
  )
}

export default App


// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';

// const App = () => {

//   const [a, setA] = useState(0)
//   const [b, setB] = useState(0)

//   function aChanging() {
//     console.log('A ki value change ho gyi');
//   }

//   function bChanging() {
//     console.log('B ki value change ho gyi');
//   }

//   useEffect(function(){
//     aChanging()
//   },[a])
  
//   useEffect(function(){
//     bChanging()
//   },[b])

//   return (
//     <div>
//       <h1>A is {a}</h1>
//       <h1>B is {b}</h1>
//       <button
//         onClick={() => {
//           setA(a + 1)
//         }}
//       >Change A</button>
//       <button
//         onClick={() => {
//           setB(b - 1)
//         }}
//       >Change B</button>
//     </div>
//   )
// }

// export default App