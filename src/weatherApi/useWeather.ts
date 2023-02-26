import { useEffect, useState } from "react"
import { fetchCityWeathers, TResponse } from "./fetchWeather"

const useWeather = () => {
  const [tokyoWeather, setTokyoWeather] = useState<TResponse | null>(null)
  const [parisWeather, setParisWeather] = useState<TResponse | null>(null)
  const [newYorkWeather, setNewYorkWeather] = useState<TResponse | null>(null)
  useEffect(() => {
    let canceled = false
    const weatherResponse = async () => {
      const response = await fetchCityWeathers()
      if (!canceled) {
        setTokyoWeather(response.Tokyo)
        setParisWeather(response.Paris)
        setNewYorkWeather(response.NewYork)
      }
    }
    weatherResponse()
    return () => {
      canceled = true
    }
  }, [])
  return [tokyoWeather, parisWeather, newYorkWeather]
}

export default useWeather
