const fs = require('fs')

exports.handler = async function (event, context) {

  let data = JSON.stringify({ euro: "works2222" });

  fs.writeFile('./functions/data/exchangeRates.json', data, (err) => {
    if (err) throw err;
    console.log('exchangeRates.json updated!');
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "updated" })
  }


}

