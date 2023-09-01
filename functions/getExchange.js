const fs = require('fs').promises
const path = require('path')

//const testJSON = require('../dist/exchangeRates.json')

exports.handler = async function (event, context) {

  // fs.readFile('/exchangeRates.json', (err, data) => {
  //   //if (err) return res.json(err);
  //   const exchangeRates = JSON.parse(data);

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(exchangeRates)
  //   }
  // });

  //const data = await fs.readFile('./exchangeRates.json');

  try {
    const data = await fetch('https://content.dropboxapi.com/2/files/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer sl.BlKmBAZLkwIGsfscI27KfLt9wsAR8goaJBLJFPoM0aMBvv6A847rKdB5q-Dwkh80yKsX0espIjn_ranzMTr-_rd7CY-74Mb2jx-23pCfmTZk2hd_zJXHxN8C0Rguu-_WSKRAEHzyQjn_`,
        'Dropbox-API-Arg': '{"path": "/rates.json"}'
      }
    })

    const res = await data.json()
    //console.log(res)
    return {
      statusCode: 200,
      body: JSON.stringify(res)
    }

  } catch (error) {
    console.log(error)
  }





}




