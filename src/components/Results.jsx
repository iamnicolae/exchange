import Result from './Result'

function Results({ results, currency }) {
  return (
    <div className="results">
      {results.map(exchange => <Result key={exchange.bank_name} currency={currency} exchange={exchange} />)}
    </div>
  )
}

export default Results