const App = () => {

  // localStorage.clear()
  // localStorage.setItem('name', 'Stanley')
  // localStorage.getItem('name')
  // localStorage.removeItem('name')

  const user = {
    username: 'Stanley',
    age: 18,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);

  return (
    <div>App</div>
  )
}

export default App