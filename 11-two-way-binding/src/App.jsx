import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted by ', title)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input type="text" placeholder="Enter your name"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App