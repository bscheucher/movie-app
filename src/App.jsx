import { useState } from 'react'

import logo from '/logo.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} className='logo' alt="logo" />
      <Home />
    </>
  )
}

export default App
