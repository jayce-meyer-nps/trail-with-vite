import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NPMapTrail from '@npmap/trail'

function App() {
  const [count, setCount] = useState(0)

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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="map-container">
        <NPMapTrail trailDataUrl='https://svcdev.nps.gov/data/api/v1/sites/fc8edc08-f1ec-97f3-a796-692570030ada?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geojson&select=edit,trailinfo' />
      </div>
    </>
  )
}

export default App
