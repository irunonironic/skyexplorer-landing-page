import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-30 pt-14">

      <h1 className="text-5xl italic text-gray-800 flex items-center gap-2">
        Find the best
        <img
          src="/direct-flight_1565911.png"
          alt="flight"
          className="w-8 h-8 inline"
        />
        flights faster
      </h1>
      <h1 className="text-5xl italic text-gray-600 mt-4">
        Travel smarter
      </h1>
    </div>
  )
}

export default Header
