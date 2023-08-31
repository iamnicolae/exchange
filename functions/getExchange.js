const fs = require('fs').promises

const testJSON = require('../dist/exchangeRates.json')

exports.handler = async function (event, context) {

  // fs.readFile('/exchangeRates.json', (err, data) => {
  //   //if (err) return res.json(err);
  //   const exchangeRates = JSON.parse(data);

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(exchangeRates)
  //   }
  // });

  const data = await fs.readFile("./exchangeRates.json");

  return {
    statusCode: 200,
    body: data.toString()
  }




}




