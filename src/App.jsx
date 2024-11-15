import { useState } from 'react'
import languages from './db.js'
import AppHeader from './assets/components/AppHeader.jsx'
import './App.css'

function App() {

  const [active, setActive] = useState(0)
  function handleClick(e) {
    console.log(e.target);
    const newActive = Number(e.target.getAttribute('data-index'))
    console.log(newActive);
    setActive(newActive)


  }




  return (
    <>
      < AppHeader />







    </>
  )
}

export default App
