import './Footer.css'

import formatDate from '../utils/formatDate'

function Footer({ lastExchangeUpdate }) {
  return (
    <footer>
      <h2>Ultima actualizare</h2>
      <span>{formatDate(lastExchangeUpdate)}</span>
    </footer>
  )
}

export default Footer
