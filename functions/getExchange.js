const getDropboxToken = require('./utils/getDropboxToken')

exports.handler = async function (event, context) {
  const dropboxToken = await getDropboxToken()
  const { DROPBOX_FILE_NAME, DROPBOX_GET_FILE_URL } = process.env

  try {
    const response = await fetch(DROPBOX_GET_FILE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer ${dropboxToken}`,
        'Dropbox-API-Arg': `{"path": "/${DROPBOX_FILE_NAME}"}`
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