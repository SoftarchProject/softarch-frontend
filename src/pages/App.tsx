import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import gardenBackground from '../assets/garden-wallpaper.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex max-h-screen max-w-screen">
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Image background */}
        <img className='object-cover w-full aspect-video md:aspect-[13/3]' src={gardenBackground} ></img>
        
        {/* For loop Selling section */}
        <div className="container mx-auto text-2xl font-bold text-blue-600 md:text-4xl">
            <h1 className='py-2'> Decorative tree </h1>
            <div className='flex flex-col rounded md:max-w-full md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-y-6'>
              <Card name='one' price={23}></Card>
              <Card name='two' price={32}></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
