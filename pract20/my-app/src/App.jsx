import React, { useEffect, useState } from "react";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const CITY = "Jaipur";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

const app = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default app;

