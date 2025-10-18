import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./form.jsx";
import List from "./List.jsx";
import { WeatherProvider } from "./WeatherProvider.jsx";

function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
      setCurrentTime(formattedDateTime);
    };

    updateTime(); // call immediately on load
    const interval = setInterval(updateTime, 1000); // update every 1 sec

    // cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherProvider>
      <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-start">
        <h1 className="text-3xl font-bold text-center text-amber-600 mt-6">
          🌤️ React Weather App
        </h1>

        {/* Live Time Display */}
        <h1 className="text-2xl font-semibold text-yellow-600 pt-5">
          {currentTime}
        </h1>

        <Form />
        <List />
      </div>
    </WeatherProvider>
  );
}

export default App;
