import React from 'react';

const AirlineLogo = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-150 left-1/2 -translate-x-1/2">
        <div className="flex gap-6 opacity-50 text-gray-500 text-sm font-medium">
          <div>Lufthansa</div>
          <div>LOT</div>
          <div>DELTA</div>
          <div>KLM</div>
          <div>UNITED</div>
        </div>
      </div>
    </div>
  );
};

export default AirlineLogo;
