import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";
import { WeatherProvider } from "./WeatherProvider.jsx";

function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formattedDateTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherProvider>
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="mt-12 mb-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 drop-shadow-lg">
              <span className="inline-block animate-bounce">🌤️</span> Weather
              Forecast
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-lg">
              <p className="text-white/90 text-lg font-medium">{currentTime}</p>
            </div>
          </div>

          <Form />
          <List />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
