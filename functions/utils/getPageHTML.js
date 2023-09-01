import fetch from 'node-fetch';

async function getPageHTML(PAGE_URL) {
  try {
    const response = await fetch(PAGE_URL)
    const data = await response.text()
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = getPageHTML