import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-8">
      
      <div className="pl-48">
        <i>Sky</i>Explorer
      </div>

    
      <div className="flex items-center mt-0">
        <div className="pr-10">
          <a href="#">Features</a>
        </div>
        <div className="pr-10">
          <a href="#">Method</a>
        </div>
        <div className="pr-10">
          <a href="#">Pricing</a>
        </div>
        <div className="pr-10">
          <a href="#">Changelog</a>
        </div>
      </div>

     
      <div className="pr-48">
        <button className="bg-white/10 backdrop-blur-md border border-white/30 text-black px-6 py-2 rounded-xl shadow-2xl hover:bg-slate-100">
          Log in
        </button>
      </div>

    </div>
  )
}

export default Navbar
