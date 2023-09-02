import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    // fetch('/.netlify/functions/updateExchange')
    //   .then(data => data.json())
    //   .then(msg => console.log(msg))

    fetch('/.netlify/functions/getExchange')
      .then(data => data.json())
      .then(msg => console.log(msg))



    // async function dropbox() {
    //   var fileContent = JSON.stringify({ bank_name: '00000000000000000', });
    //   var file = new Blob([fileContent], { type: 'application/json' });

    //   try {
    //     const data = await fetch('https://content.dropboxapi.com/2/files/upload', {
    //       method: 'POST',
    //       body: file,
    //       headers: {
    //         'Content-Type': 'application/octet-stream',
    //         'Authorization': `Bearer sl.BlKmBAZLkwIGsfscI27KfLt9wsAR8goaJBLJFPoM0aMBvv6A847rKdB5q-Dwkh80yKsX0espIjn_ranzMTr-_rd7CY-74Mb2jx-23pCfmTZk2hd_zJXHxN8C0Rguu-_WSKRAEHzyQjn_`,
    //         'Dropbox-API-Arg': '{"path": "/rates.json","mode": "overwrite","autorename": false,"mute": false}'
    //       }
    //     })

    //     const res = await data.json()
    //     console.log(res)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // dropbox();

    // async function dropboxDownload() {
    //   try {
    //     const data = await fetch('https://content.dropboxapi.com/2/files/download', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/octet-stream',
    //         'Authorization': `Bearer sl.BlKmBAZLkwIGsfscI27KfLt9wsAR8goaJBLJFPoM0aMBvv6A847rKdB5q-Dwkh80yKsX0espIjn_ranzMTr-_rd7CY-74Mb2jx-23pCfmTZk2hd_zJXHxN8C0Rguu-_WSKRAEHzyQjn_`,
    //         'Dropbox-API-Arg': '{"path": "/rates.json"}'
    //       }
    //     })

    //     const res = await data.json()
    //     console.log(res)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // dropboxDownload();

    // async function dropboxDownload() {
    //   try {
    //     const data = await fetch('https://www.dropbox.com/scl/fi/n3vtkj7hdsacdt6pvptx1/rates.json?rlkey=jh5ftrpfwswtyfit05dyu9llo&dl=0', {
    //       method: 'GET',
    //       // headers: {
    //       //   'Content-Type': 'application/octet-stream',
    //       //   'Authorization': `Bearer sl.BlKmBAZLkwIGsfscI27KfLt9wsAR8goaJBLJFPoM0aMBvv6A847rKdB5q-Dwkh80yKsX0espIjn_ranzMTr-_rd7CY-74Mb2jx-23pCfmTZk2hd_zJXHxN8C0Rguu-_WSKRAEHzyQjn_`,
    //       //   'Dropbox-API-Arg': '{"path": "/rates.json"}'
    //       // }
    //     })

    //     //const res = await data.json()
    //     console.log(data)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // dropboxDownload();

  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
