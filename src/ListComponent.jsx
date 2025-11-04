import React from "react";

const ListComponent = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl text-center w-80">
          <div className="text-5xl mb-2 animate-bounce">🌤️</div>
          <p className="text-white/80 text-sm font-medium">
            Enter a city to view weather details
          </p>
        </div>
      </div>
    );
  }

  const getWeatherIcon = (condition) => {
    const icons = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Drizzle: "🌦️",
      Thunderstorm: "⛈️",
      Snow: "❄️",
      Mist: "🌫️",
      Smoke: "🌫️",
      Haze: "🌫️",
      Fog: "🌫️",
    };
    return icons[condition] || "🌤️";
  };

  const weatherCondition = weatherData.weather?.[0]?.main;
  const weatherIcon = getWeatherIcon(weatherCondition);

  return (
    <div className="w-full max-w-md mx-auto h-[300px] px-3">
      <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl h-full overflow-hidden flex flex-col justify-between">
        {/* Top Section: City + Icon + Temp */}
        <div className="flex justify-between items-center p-4 border-b border-white/20 bg-gradient-to-r from-blue-500/30 to-purple-500/20">
          <div>
            <h1 className="text-xl font-bold text-white leading-tight">
              {weatherData.name}
            </h1>
            <p className="text-white/70 text-xs">{weatherData.sys?.country}</p>
          </div>
          <div className="text-5xl">{weatherIcon}</div>
        </div>

        {/* Middle: Temp + Condition */}
        <div className="text-center py-2">
          <div className="text-4xl font-bold text-white">
            {Math.round(weatherData.main?.temp)}°C
          </div>
          <p className="text-sm text-white/80 capitalize">
            {weatherData.weather?.[0]?.description}
          </p>
          <p className="text-xs text-white/60">
            Feels like {Math.round(weatherData.main?.feels_like)}°C
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-4 gap-2 p-3 text-center text-white/80 text-xs">
          <div className="bg-white/10 rounded-xl p-2">
            <div className="text-lg">💧</div>
            <div>{weatherData.main?.humidity}%</div>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <div className="text-lg">💨</div>
            <div>{weatherData.wind?.speed} m/s</div>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <div className="text-lg">🎚️</div>
            <div>{weatherData.main?.pressure}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <div className="text-lg">📍</div>
            <div>
              {weatherData.coord?.lat?.toFixed(1)}, {weatherData.coord?.lon?.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
