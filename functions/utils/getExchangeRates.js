const cheerio = require('cheerio')
const getPageHTML = require('./getPageHTML')
const sanitizeExchangeRates = require('./sanitizeExchangeRates')
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
        logo: bank.logo,
        rates: {}
      }

      ratesTableRows.each((i, row) => {
        const $row = $(row)
        const currency = currencies.find(code => $row.text().includes(code))

        if (currency) {
          if (bank.name === "BRD") {
            bankRates.rates[`${currency}/RON`] = sanitizeExchangeRates($(`${bank.buy_rate_selector} p:nth-child(${i + 1})`))
            bankRates.rates[`RON/${currency}`] = sanitizeExchangeRates($(`${bank.sell_rate_selector} p:nth-child(${i + 1})`))
          } else {
            bankRates.rates[`${currency}/RON`] = sanitizeExchangeRates($row.find(bank.buy_rate_selector))
            bankRates.rates[`RON/${currency}`] = sanitizeExchangeRates($row.find(bank.sell_rate_selector))
          }
        }
      })

      exchangeRates.push(bankRates)
    }

    return {
      lastUpdate: new Date().toLocaleString("en-US", { timeZone: "Europe/Bucharest" }),
      exchange: exchangeRates
    }

  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = getExchangeRates