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
    <div className="w-full max-w-md px-4 mt-8">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter city name..."
          className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-white/60 text-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all shadow-lg"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Form;
