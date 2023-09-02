import React, { useEffect, useState } from 'react'
import './App.css'

import Logo from './Logo'
import Footer from './Footer'
import Converter from './Converter'
import Loading from './Loading'

function App() {

  const [exchangeRates, setExchangeRates] = useState([])
  const [lastExchangeUpdate, setLastExchangeUpdate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/.netlify/functions/getExchange')
      .then(res => res.json())
      .then(data => {
        setExchangeRates(data.exchange)
        setLastExchangeUpdate(data.lastUpdate)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="app">
      <div className="container">
        {isLoading ?
          <Loading />
          :
          <>
            <Logo />
            <Converter exchangeRates={exchangeRates} />
            <Footer lastExchangeUpdate={lastExchangeUpdate} />
          </>
        }
      </div>
    </div>
  )
}

export default App