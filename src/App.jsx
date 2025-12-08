import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetUsers from './components/GetUsers'
import AddUsers from './components/AddUsers'
import Navbar from './components/Navbar'
import Updateuser from './components/Updateuser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<GetUsers />} />
          <Route path='/addusers' element={<AddUsers />} />
          <Route path='/updateuser/:id' element={<Updateuser />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
