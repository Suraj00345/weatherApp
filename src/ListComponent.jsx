import React from "react";

const ListComponent = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="text-center text-white mt-6 text-lg">
        Enter a city to view weather details 🌤️
      </div>
    );
  }

  return (
    <div className="border-2 w-80 m-10 p-4 bg-green-400 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-amber-900 mb-2">
        City: {weatherData.name}, {weatherData.sys?.country}
      </h1>

      <div className="text-cyan-700 font-semibold">
        <p>Lat: {weatherData.coord?.lat}</p>
        <p>Lon: {weatherData.coord?.lon}</p>
      </div>

      <div className="mt-4 text-blue-900">
        <p>Temperature: {Math.round(weatherData.main?.temp)}°C</p>
        <p>Max Temperature: {Math.round(weatherData.main?.temp_max)}°C</p>
        <p>Min Temperature: {Math.round(weatherData.main?.temp_min)}°C</p>
        <p>Feels Like: {Math.round(weatherData.main?.feels_like)}°C</p>
        <p>Pressure: {weatherData.main?.pressure} hPa</p>
        <p>Humidity: {weatherData.main?.humidity}%</p>
      </div>

      <div className="mt-4 text-green-900">
        <p>
          Weather Condition:{" "}
          {weatherData.weather && weatherData.weather[0]?.main}
        </p>
        <p>
          Description:{" "}
          {weatherData.weather && weatherData.weather[0]?.description}
        </p>
        <p>Wind Speed: {weatherData.wind?.speed} m/s</p>
      </div>
    </div>
  );
};

export default ListComponent;
