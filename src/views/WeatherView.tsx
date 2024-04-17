import React from 'react';

interface Props {
  weather: string;
  onFetchWeather: (city: string) => void;
}

const WeatherView: React.FC<Props> = ({ weather, onFetchWeather }) => {
  const [city, setCity] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    onFetchWeather(city);
  };

  return (
    <div>
      <h1>Check the Weather</h1>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city" />
      <button onClick={handleSubmit}>Get Weather</button>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherView;
