const cheerio = require('cheerio')
const getPageHTML = require('./getPageHTML')
const banks = require('../data/banks.json')

async function getExchangeRates() {
  try {
    const currencies = ['EUR', 'CHF', 'GBP', 'USD']
    let exchangeRates = []

    for (const bank of banks) {
      const $ = cheerio.load(await getPageHTML(bank.exchange_url))
      const ratesTableRows = $(bank.row_selector)
      const bankRates = {
        name: bank.name,
        rates: {}
      }

      ratesTableRows.each((i, row) => {
        const $row = $(row)
        const currency = currencies.find(code => $row.text().includes(code))

        if (currency) {
          if (bank.name === "BRD") {
            bankRates.rates[`${currency}/RON`] = parseFloat($(`${bank.buy_rate_selector} p:nth-child(${i + 1})`).text().replace(',', '.').trim());
            bankRates.rates[`RON/${currency}`] = parseFloat($(`${bank.sell_rate_selector} p:nth-child(${i + 1})`).text().replace(',', '.').trim());
          } else {
            bankRates.rates[`${currency}/RON`] = parseFloat($row.find(bank.buy_rate_selector).text().replace(',', '.').trim());
            bankRates.rates[`RON/${currency}`] = parseFloat($row.find(bank.sell_rate_selector).text().replace(',', '.').trim());
          }
        }
      })

      exchangeRates.push(bankRates)
    }

    return exchangeRates

  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = getExchangeRates