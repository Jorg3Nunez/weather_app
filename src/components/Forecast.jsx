import React from 'react'

const Forecast = ({ title, data} ) => {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>
            {title}
        </p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between'>
            {data.map((d, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <p className='font-light text-xl'>
                    {d.title}
                </p>
                <img src={d.icon}
                className="w-12 my-1"
                alt="weather icon"
                />
                <p className='font-medium text-lg'>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))}
        </div>
      </div>
  );
};

export default Forecast;
