import React, { useContext } from "react";
import { WeatherContext } from "./WeatherProvider";
import ListComponent from "./ListComponent";

const List = () => {
  const { weatherList, error } = useContext(WeatherContext);

  if (error) {
    return (
      <p className="text-red-600 font-semibold mt-4">
        ❌ {error}
      </p>
    );
  }

  if (weatherList.length === 0) {
    return (
      <p className="text-white mt-4 text-lg">
        🌍 Search for a city to see its weather
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {weatherList.map((data, index) => (
        <ListComponent key={index} weatherData={data} />
      ))}
    </div>
  );
};

export default List;
