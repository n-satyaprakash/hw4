import React, { useState } from 'react';
import WeatherView from '../views/WeatherView';
import { fetchWeather } from '../models/WeatherModel';

const WeatherController = () => {
  const [weather, setWeather] = useState('Enter a city to get the current weather.');
  const apiKey = '1834a8801dfad91388e3937a7305d30d';

  const handleFetchWeather = async (city: string) => {
    try {
      const data = await fetchWeather(city, apiKey);
      setWeather(`Current temperature in ${city} is ${data.main.temp}°C with ${data.weather[0].description}.`);
    } catch (error) {
      setWeather('Failed to fetch weather data. Please try another city.');
    }
  };
  

  return <WeatherView weather={weather} onFetchWeather={handleFetchWeather} />;
};

export default WeatherController;
