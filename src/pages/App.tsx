import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import gardenBackground from '../assets/garden-wallpaper.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center max-h-screen">
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Image background */}
        <img className='w-full md:aspect-[12/3] object-cover md:h-full md:w-full' src={gardenBackground} ></img>
        
        {/* For loop Selling section */}
        <div className="container mx-auto text-2xl font-bold text-blue-600 md:text-4xl">
            <h1 className='py-2'> Decorative tree </h1>
            <div className='flex flex-col rounded md:max-w-full md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-y-6'>
              <div className='w-[180px] h-[180px] border-black border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
              <div className='border-black w-[180px] h-[180px] border-2'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
