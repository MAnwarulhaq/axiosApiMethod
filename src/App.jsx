import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetUsers from './components/GetUsers'
import AddUsers from './components/AddUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <GetUsers/>
      {/* <AddUsers/> */}
    </>
  )
}

export default App
