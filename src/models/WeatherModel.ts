export const fetchWeather = async (city: string, apiKey: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const text = await response.text();

    try {
      const data = JSON.parse(text);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, ${data.message}`);
      }
      return data;
    } catch (error) {
      console.error("Failed to parse JSON!", text);
      throw error;
    }
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
};
