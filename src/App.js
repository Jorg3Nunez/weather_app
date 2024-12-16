import './App.css';
import Inputs from './components/Inputs';
import Forecast from './components/Forecast';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState, useCallback } from 'react';



const App = () => {

  const [query, setQuery] = useState({ q: "virginia" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = useCallback(async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  }, [query, units]);

  useEffect(() => { getWeather()},[getWeather]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'imperial' ? 60 : 20;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  }

  return (
    <div className={`mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br
    shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} units={units} />
          <Forecast title='hourly forecast' data={weather.hourly}/>
          <Forecast title='daily forecast' data={weather.daily}/>
        </>
      )}
    </div>
  );
};

export default App;
