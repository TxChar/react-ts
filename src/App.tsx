import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)



  return (

    <div className="min-h-screen bg-gray-100">
            <Navbar />
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="flex gap-4 mb-8">
        <a  href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo react w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react react w-20 h-20" alt="React logo" />
        </a>
      </div>
      <div className="text-center">
        <div className="mb-6">
        < Button onClick={() => setCount((count) => count + 1)} count={count}/>
        </div>

        <p className="mb-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </div>

  )
}

export default App

// function App() {
//   return (
//     <h1 className="text-4xl text-blue-500">Vite Project</h1>
//   )
// }

// export default App;