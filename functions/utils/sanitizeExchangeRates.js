function sanitizeExchangeRates(rateSelector) {
  return parseFloat(rateSelector.text().replace(',', '.').trim())
}

module.exports = sanitizeExchangeRates