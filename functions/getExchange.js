//const fs = require('fs')

const testJSON = require('./data/exchangeRates.json')

exports.handler = async function (event, context) {

  // fs.readFile('/exchangeRates.json', (err, data) => {
  //   //if (err) return res.json(err);
  //   const exchangeRates = JSON.parse(data);

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(exchangeRates)
  //   }
  // });

  return {
    statusCode: 200,
    body: JSON.stringify(testJSON)
  }




}




