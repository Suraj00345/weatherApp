import React, { useContext } from "react";
import { WeatherContext } from "./WeatherProvider";

const Form = () => {
  const { city, setCity, fetchWeather } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex  items-center justify-center"
      >
        <label
          htmlFor="city"
          className="text-blue-800 text-2xl font-bold m-4 text-center"
        >
          Enter City Name:
        </label>

        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          id="city"
          name="city"
          className="m-4 p-2 border-2 bg-green-700 rounded text-white text-center"
          placeholder="Enter your city here"
        />

        <button
          type="submit"
          disabled={!city.trim()}
          className={`font-bold p-2 rounded ${
            city.trim()
              ? "bg-amber-700 hover:bg-amber-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Form;
