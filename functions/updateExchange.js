const fs = require('fs').promises
import fetch from 'node-fetch';
const cheerio = require('cheerio')
const path = require('path')

exports.handler = async function (event, context) {

  const response = await fetch('https://www.bancatransilvania.ro/conturi-si-operatiuni/operatiuni/curs-valutar/curs-valutar-la-case-de-schimb');
  const body = await response.text();

  const $ = cheerio.load(body);
  let rates = [];
  const exchangeTableRows = $('#valute div.tr');
  const currencies = ['EUR', 'CHF', 'GBP', 'USD'];
  const exchangeRates = {
    bank_name: 'transivlania',
    rates: {}
  };

  exchangeTableRows.each((i, elem) => {
    const $elem = $(elem);
    let currency;

    if (currencies.some(code => {
      currency = code;

      return $elem.text().includes(code)
    })) {
      exchangeRates.rates[`${currency}/RON`] = parseFloat($elem.find('div.td:nth-child(3)').text().replace(',', '.').trim());
      exchangeRates.rates[`RON/${currency}`] = parseFloat($elem.find('div.td:nth-child(4)').text().replace(',', '.').trim());
    }
  });

  rates.push(exchangeRates);


  // let data = JSON.stringify(rates);
  // var file = new Blob([data], { type: 'application/json' });
  // let data2 = JSON.stringify([{ bank: "989898989898989898" }])

  // const file = await fs.writeFile('./exchangeRates.json', data2)

  // console.log(path.join(__dirname, '../../../../dist/exchangeRates.json'))

  // fs.writeFileSync(path.join(__dirname, './data/exchangeRates.json'), data2, (err) => {
  //   if (err)
  //     console.log(err);
  //   else {
  //     console.log("File written successfully\n");
  //   }
  // });

  // let data = JSON.stringify(rates);
  // var file = new Blob([data], { type: 'application/json' });

  // try {
  //   const data = await fetch('https://content.dropboxapi.com/2/files/upload', {
  //     method: 'POST',
  //     body: file,
  //     headers: {
  //       'Content-Type': 'application/octet-stream',
  //       'Authorization': `Bearer Bearer sl.BlKmBAZLkwIGsfscI27KfLt9wsAR8goaJBLJFPoM0aMBvv6A847rKdB5q-Dwkh80yKsX0espIjn_ranzMTr-_rd7CY-74Mb2jx-23pCfmTZk2hd_zJXHxN8C0Rguu-_WSKRAEHzyQjn_`,
  //       'Dropbox-API-Arg': '{"path": "/rates.json","mode": "add","autorename": true,"mute": false}'
  //     }
  //   })

  //   console.log(data)
  // } catch (error) {
  //   console.log(error)
  // }

  // fetch('https://content.dropboxapi.com/2/files/upload', {
  //   method: 'POST',
  //   body: file,
  //   headers: {
  //     'Content-Type': 'application/octet-stream',
  //     'Authorization': `Bearer sl.BlJLYgVbl8nf-QHXyfautmrGzITVIMDBS9xdRNcDU1Rah7Lue1bygOayTxvFN3zosEG0X9ebtqC1bIXvhIaP2GAGzMmnKNCOWZZTmxM7jJBZH6ugobhihKZXuhSnPDpOjYASf8CY8oHn`,
  //     'Dropbox-API-Arg': '{"path": "/rates.pdf","mode": "add","autorename": true,"mute": false}'
  //   }
  // })
  //   .then(res => res)
  //   .then(data => console.log(data))
  // //.catch(err => console.log(err))

  var fileContent = JSON.stringify({ bank_name: '12312131231231', });
  var file = new Blob([fileContent], { type: 'application/json' });

  try {
    const data = await fetch('https://content.dropboxapi.com/2/files/upload', {
      method: 'POST',
      body: file,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer sl.BlKmBAZLkwIGsfscI27KfLt9wsAR8goaJBLJFPoM0aMBvv6A847rKdB5q-Dwkh80yKsX0espIjn_ranzMTr-_rd7CY-74Mb2jx-23pCfmTZk2hd_zJXHxN8C0Rguu-_WSKRAEHzyQjn_`,
        'Dropbox-API-Arg': '{"path": "/rates.json","mode": "overwrite","autorename": false,"mute": false}'
      }
    })

    const res = await data.json()
    console.log(res)

  } catch (error) {
    console.log(error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "updated" })
  }


}

