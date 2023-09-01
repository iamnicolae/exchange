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
        'Authorization': `Bearer sl.BlNxuRkvJOM4MEG2FPBU4OEpeu6hzOKDLlcdErwG0EOk2g7QhzDJmUn1VfNlOSiuxyU3UEQwGyaGevRT85Rk_jlqsKMNb2IVx804sCnGSstHZTAJsM35YoPGxbRtE8X0TojWuAfQBtAF`,
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




