import fetch from 'node-fetch';
const getDropboxToken = require('./utils/getDropboxToken')
const getExchangeRates = require('./utils/getExchangeRates')

exports.handler = async function (event, context) {
  const { DROPBOX_FILE_NAME, DROPBOX_UPLOAD_FILE_URL } = process.env
  const dropboxToken = await getDropboxToken()
  const exchangeRates = await getExchangeRates()
  const exchangeRatesJsonFile = new Blob([JSON.stringify(exchangeRates)], { type: 'application/json' })

  try {
    const response = await fetch(DROPBOX_UPLOAD_FILE_URL, {
      method: 'POST',
      body: exchangeRatesJsonFile,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer ${dropboxToken}`,
        'Dropbox-API-Arg': `{"path": "/${DROPBOX_FILE_NAME}","mode": "overwrite","autorename": false,"mute": false}`
      }
    })

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  }
}