import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { TbCurrentLocation } from "react-icons/tb";


const Inputs = ({setQuery, setUnits}) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city});
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        setQuery({lat: latitude, lon: longitude});
      });
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder='search by city...'
          className='text-gray-500 text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
        />

        <CiSearch
          size={30}
          className='cursor-pointer transition ease-out hover:scale-125'
          onClick={handleSearchClick}
          />

        <TbCurrentLocation
          size={30}
          className='cursor-pointer transition ease-out hover:scale-125'
          onClick={handleLocationClick}
          />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button className='text-2xl font-medium transition ease-out hover:scale-125' onClick={() => setUnits('metric')}>
          °C
          </button>
          <p className='text-2xl font-medium mx-1'>|</p>
          <button className='text-2xl font-medium transition ease-out hover:scale-125' onClick={() => setUnits('imperial')}>
          °F
          </button>
        </div>
    </div>
  );
};

export default Inputs;
