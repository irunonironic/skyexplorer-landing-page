import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-30">
      <h1 
        className="text-5xl lg:text-5xl font-light "
style={{ fontFamily: '"Libre Baskerville", serif', fontStyle: 'italic',fontWeight:300 }}
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
        className="text-5xl lg:text-5xl font-medium italic tracking-wide mt-2 text-slate-500"
        style={{ fontFamily: '"Crimson Text", serif', fontStyle: 'italic' }}
      >
        Travel smarter
      </h2>
    </div>
  )
}

export default Header