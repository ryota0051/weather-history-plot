import React from "react"
import "./App.css"
import TemperatureLine from "./components/temperatureLine"
import useWeather from "./weatherApi/useWeather"

function App() {
  const [tokyoWeather, parisWeather, newYorkWeather] = useWeather()

  if (tokyoWeather != null && parisWeather != null && newYorkWeather != null) {
    return (
      <div className="App">
        <h1>Tokyo Paris NewYork Temperature</h1>
        <div>
          <TemperatureLine tokyoWeather={tokyoWeather} parisWeather={parisWeather} newYorkWeather={newYorkWeather} />
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default App
