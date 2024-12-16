import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            title: 'Virginia'
        },
        {
            id: 2,
            title: 'Texas'
        },
        {
            id: 3,
            title: 'California'
        },
        {
            id: 4,
            title: 'Alaska'
        },
        {
            id: 5,
            title: 'London'
        },
    ];

  return (<div className='flex items-center justify-around my-6'>
    {cities.map((city) => ( 
        <button key={city.id} className='text-white text-2xl 
        font-medium hover:bg-gray-700/20 px-3 py-2 rounded-lg transition ease-in'
        onClick={() => setQuery({q: city.title})}> 
        {city.title}
        </button> 
    ))}
  </div>
  );
};

export default TopButtons;
