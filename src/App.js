import "./App.css";
import { useState } from "react";
import Card from "./components/UI/Card";
import Search from "./components/search";
import JalaliDate from "./components/Date";

function App() {
  const [weather, setWeather] = useState({});

  const addWeatherHandler = (res) => {
    setWeather(res);
  };

  return (
    <Card>
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? "app warm"
              : "app"
            : "app"
        }
      >
        <Search onAddWeather={addWeatherHandler} />
        <main>
          {typeof weather.main != "undefined" ? (
            <div className="backgorond">
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <JalaliDate />
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </main>
      </div>
    </Card>
  );
}

export default App;
