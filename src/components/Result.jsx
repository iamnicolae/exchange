

function Result({ exchange, currency }) {
  return (
    <div className="exchange-result">
      <div className="bank">
        <span className="bank-logo"><img src={exchange.bank_logo} alt={exchange.bank_name} /></span>
        <span className="bank-name">{exchange.bank_name}</span>
      </div>
      <div className="result">
        <span className="result-sum">{exchange.result.toFixed(2)}</span>
        <span className="result-name">
          <span className="result-symbol"><img src={`/currencies/${currency}.svg`} alt={currency} /></span>
          <span className="result-code">{currency}</span>
        </span>
      </div>
    </div>
  )
}

export default Result