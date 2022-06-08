import React from "react";
import './App.css';
import Data from "./weatherData";
import Forecast from "./components/WeatherForecast";

export default function App() {
  const forecast = Data.map((ele, index) => {
    return <Forecast {...ele} key={index} />;
  });
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="Forecast">{forecast}</section>
    </div>
  );
}