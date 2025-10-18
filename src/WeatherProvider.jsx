import React, { useState, createContext } from "react";

// ✅ Create and export context
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState([]); // store multiple cities
  const [error, setError] = useState("");

  // ✅ Fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      setError("");

      const API_KEY = "615045365735e6f0ef89adeff60c581d"; // 🔑 your API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      // ✅ Avoid duplicates
      const exists = weatherList.find(
        (item) => item.name.toLowerCase() === data.name.toLowerCase()
      );

      if (!exists) {
        setWeatherList((prev) => [...prev, data]);
      } else {
        // Optional: Replace old data (to refresh)
        setWeatherList((prev) =>
          prev.map((item) =>
            item.name.toLowerCase() === data.name.toLowerCase() ? data : item
          )
        );
      }

      // Clear input after successful fetch
      setCity("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherList,
        error,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
