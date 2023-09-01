import fetch from 'node-fetch';

async function getDropboxToken() {
  const { DROPBOX_GET_TOKEN_URL, DROPBOX_REFRESH_TOKEN, DROPBOX_APP_KEY_SECRET } = process.env

  try {
    const response = await fetch(DROPBOX_GET_TOKEN_URL, {
      method: 'POST',
      body: new URLSearchParams({
        'refresh_token': DROPBOX_REFRESH_TOKEN,
        'grant_type': 'refresh_token',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': `Basic ${DROPBOX_APP_KEY_SECRET}`
      }
    })
    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = getDropboxToken