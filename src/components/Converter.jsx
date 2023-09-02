import { useState, useEffect } from 'react'
import Results from './Results'
import Dropdown from './Dropdown'
import './Converter.css'

function Converter({ exchangeRates }) {

  const [fromCurrencies] = useState(['EUR', 'USD', 'CHF', 'GBP', 'RON'])
  const [toCurrencies, setToCurrencies] = useState(['RON'])

  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('RON')

  const [fromValue, setFromValue] = useState(100)
  const [toValues, setToValues] = useState([])

  useEffect(() => {
    const calculateExchange = () => {
      const results = []
      let result, exchangeCalculation

      exchangeRates.map(ex => {
        if (fromCurrency === "RON") {
          exchangeCalculation = (fromValue * (1 / ex.rates[`${fromCurrency}/${toCurrency}`]))
        } else {
          exchangeCalculation = (fromValue * ex.rates[`${fromCurrency}/${toCurrency}`])
        }

        result = {
          bank_name: ex.name,
          bank_logo: ex.logo,
          result: exchangeCalculation
        }

        Object.keys(ex.rates).length !== 0 && results.push(result)

      })

      setToValues(results)
    }

    calculateExchange();
  }, [fromValue, fromCurrency, toCurrency, exchangeRates])

  const changeCurrencyList = (value) => {
    const currency = value

    if (currency === 'RON') {
      setToCurrencies(['EUR', 'USD', 'CHF', 'GBP'])
      setToCurrency('EUR')
    } else {
      setToCurrencies(['RON'])
      setToCurrency('RON')
    }

    setFromCurrency(currency)
  }

  return (
    <div className="converter">
      <div>
        <div className="from-converter">
          <h2 className="helper-title">Schimbă</h2>
          <input
            className="from-value"
            type="number"
            name="fromValue"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            onClick={(e) => e.target.select()}
          />
          <div className="from-currency">
            <Dropdown
              options={fromCurrencies}
              selected={fromCurrency}
              change={changeCurrencyList}
            />
          </div>
        </div>
        <div className="to-currency">
          <p className="helper-text">în</p>
          <Dropdown
            options={toCurrencies}
            selected={toCurrency}
            change={setToCurrency}
          />
        </div>
      </div>
      <Results results={toValues} currency={toCurrency} />
    </div>
  )
}

export default Converter