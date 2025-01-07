import React from 'react'
import { Link } from 'react-router-dom'
import "./HeroSection.css"

function HeroSection() {
  return (
    <>
      <div className=' flex justify-between p-4 px-6 pt-20'>
        <div className='p-10 pt-32'>
            <h1 className='text-2xl font-bold'>Learn & become the </h1>
            <h1 className='text-2xl pb-3 font-bold text-indigo-500'>Top 1% software developer</h1>
            <h1>
              <span className='typing-effect text-xl'> Make it easy with us</span> 
            </h1>
            <div className='flex py-6'>
            <Link to="/" className='text-xl font-semibold text-white bg-blue-800 px-12 py-1 rounded-sm'><span className='text-yellow-400'>Ultimate</span> Placement Solution </Link>
            </div>
        </div>
        <div className='pt-2'>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' className="w-96 rotate-slow z-0 relative" alt="Rotating React Logo"/> 
        </div>
      </div>
    </>
  )
}

export default HeroSection
