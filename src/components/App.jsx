import { useEffect, useState } from 'react'
import './App.css'

import Logo from './Logo'
import Footer from './Footer'
import Converter from './Converter'

function App() {

  useEffect(() => {

    // fetch('/.netlify/functions/updateExchange')
    //   .then(data => data.json())
    //   .then(msg => console.log(msg))

    // fetch('/.netlify/functions/getExchange')
    //   .then(data => data.json())
    //   .then(msg => console.log(msg))

  }, [])

  return (
    <div className='app'>
      <div className="container">
        <Logo />
        <Footer />
        <Converter />
      </div>
      valutar
    </div>
  )
}

export default App
