import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-24">
      <h1
        className="text-4xl lg:text-5xl font-medium leading-tight"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
        }}
      >
        <span>Find the best</span>{' '}
        <img
          src="/direct-flight_1565911.png"
          alt="flight"
          className="w-14 h-14 lg:w-12 lg:h-12 inline-block mx-1 align-middle"
        />{' '}
        <span>flights faster</span>
      </h1>
      
      <h2
        className="text-4xl lg:text-5xl font-medium italic tracking-wide mt-4 text-slate-500"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
        }}
      >
        Travel smarter
      </h2>
    </div>
  )
}

export default Header
