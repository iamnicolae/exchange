const fs = require('fs').promises
import fetch from 'node-fetch';
const cheerio = require('cheerio')
const path = require('path')

exports.handler = async function (event, context) {

  // const response = await fetch('https://www.bancatransilvania.ro/conturi-si-operatiuni/operatiuni/curs-valutar/curs-valutar-la-case-de-schimb');
  // const body = await response.text();

  // const $ = cheerio.load(body);
  // let rates = [];
  // const exchangeTableRows = $('#valute div.tr');
  // const currencies = ['EUR', 'CHF', 'GBP', 'USD'];
  // const exchangeRates = {
  //   bank_name: 'transivlania',
  //   rates: {}
  // };

  // exchangeTableRows.each((i, elem) => {
  //   const $elem = $(elem);
  //   let currency;

  //   if (currencies.some(code => {
  //     currency = code;

  //     return $elem.text().includes(code)
  //   })) {
  //     exchangeRates.rates[`${currency}/RON`] = parseFloat($elem.find('div.td:nth-child(3)').text().replace(',', '.').trim());
  //     exchangeRates.rates[`RON/${currency}`] = parseFloat($elem.find('div.td:nth-child(4)').text().replace(',', '.').trim());
  //   }
  // });

  // rates.push(exchangeRates);


  //let data = JSON.stringify(rates);
  let data2 = JSON.stringify([{ bank: "abe997878789" }])

  const file = await fs.writeFile(path.resolve('./functions', './data/exchangeRates.json'), data2)

  console.log(path.resolve('./functions', './data/exchangeRates.json'))

  // fs.writeFileSync(path.join(__dirname, './data/exchangeRates.json'), data2, (err) => {
  //   if (err)
  //     console.log(err);
  //   else {
  //     console.log("File written successfully\n");
  //   }
  // });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "updated" })
  }


}

