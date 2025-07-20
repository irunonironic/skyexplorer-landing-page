import React, { useState } from 'react';

const Input = () => {
  const [tripType, setTripType] = useState('Round trip');
  const [passengers, setPassengers] = useState('1 Passenger');
  const [fromCity, setFromCity] = useState('Warsaw, Poland');
  const [toCity, setToCity] = useState('Bangkok, Thailand');

  const handleSwap = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  return (
    <div className='flex flex-col items-center justify-center pt-22'>
      
      {/* Trip and Passenger Selection */}
      <div className=" flex pr-100 gap-6 ">
        <select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          className='text-sm text-gray-600 hover:text-black transition'
        >
          <option>Round trip</option>
          <option>One way</option>
          <option>Multi-city</option>
        </select>

        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className='text-sm text-gray-600 hover:text-black transition'
        >
          <option>Passengers</option>
          <option>1 Passengers</option>
          <option>2 Passengers</option>
          <option>3 Passengers</option>
          <option>4 Passengers</option>
          <option>5+ Passengers</option>
        </select>
      </div>

<div className="relative flex items-center justify-center p-2 rounded-2xl max-w-3xl w-full">
  {/* Input Group: From + To */}
  <div className="relative flex">
    {/* From Input */}
    <input
      type="text"
      placeholder="From"
      value={fromCity}
      onChange={(e) => setFromCity(e.target.value)}
      className=" pl-14 py-3 w-64 rounded-l-xl bg-white shadow-md text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />

    {/* Swap Button */}
    <button
      onClick={handleSwap}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-2  "
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    </button>

    {/* To Input */}
    <input
      type="text"
      placeholder="To"
      value={toCity}
      onChange={(e) => setToCity(e.target.value)}
      className=" pl-14 px-5 py-3 w-64 rounded-r-xl bg-white shadow-md text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  {/* Search Button */}
  <button className="ml-4 px-6 py-3 bg-gradient-to-br from-gray-800 to-black text-white rounded-xl font-semibold hover:bg-gray-900 transition shadow-md">
    Search
  </button>
</div>

    </div>
  );
};

export default Input;
