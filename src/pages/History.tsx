import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'

function History() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="text-[10px] font-bold text-blue-600">
      History page
      </div>
        
    </div>
  )
}

export default History
