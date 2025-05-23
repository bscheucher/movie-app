import { useState } from 'react'

import logo from '/logo.svg'
import idiot from '/hq720.jpg'
import asshole from "/asshole.webp"
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} className='logo' alt="logo" />
      <MovieCard movie={{title: "The motorbike jerk strikes again", release_date: "23.5.2025", url: idiot}} />
      <MovieCard movie={{title: "Motorcycle Asshole", release_date: "23.5.2025", url: asshole}} />
    </>
  )
}

export default App
