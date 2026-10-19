const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App