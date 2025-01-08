import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './ui/sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideNav></SideNav>
      <div>
      </div>
      <h1>Ben's Website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
