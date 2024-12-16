import React from 'react';
import { BsSunrise, BsSunset } from "react-icons/bs";
import { FaArrowUp, FaArrowDown, FaThermometerHalf } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { RiWindyFill } from "react-icons/ri";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerHalf,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: IoWaterOutline,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: RiWindyFill,
      title: "Wind",
      value: `${speed.toFixed()} ${units === 'imperial' ? 'mph' : 'km/h'}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: BsSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: BsSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: FaArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: FaArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-center py-6 text-2xl text-cyan-300'>
        <p>{details}</p>
      </div>

      <div className='flex flex-row items-center justify-between py-3'>
        <img
          src={icon}
          alt="Weather Icon"
          className='w-20'
        />
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>

        <div>
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className='flex font-light text-lg items-center justify-center'
            >
              <Icon size={18} className='mr-1' />
              {`${title}: `}
              <span className='font-medium ml-1'>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-10 text-xl py-3'>
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div
            key={id}
            className='flex flex-row items-center'>
            <Icon size={30} />
            <p className='font-medium ml-1'>
              {`${title}: ${value}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperatureAndDetails;