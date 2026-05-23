import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-left font-bold underline text-3xl'>heehee</h1>

      <button className='bg-primary flex p-4 justify-center align-center text-mutedText border-borderColor border-2 hover:bg-primaryLight '>Human Nature</button>
    </>
  )
}

export default App
