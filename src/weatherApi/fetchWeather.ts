import axios, { AxiosResponse } from "axios"

import responseExample from "./responseExample"

type TParamElement = {
  latitude: number
  longitude: number
  start_date: string
  end_date: string
  hourly: string
}

type TCityParams = {
  Tokyo: TParamElement
  Paris: TParamElement
  NewYork: TParamElement
}

type TResponse = typeof responseExample

type TCityResponse = {
  Tokyo: TResponse
  Paris: TResponse
  NewYork: TResponse
}

const URL = "https://archive-api.open-meteo.com/v1/archive"

const commonParams = {
  start_date: "2023-02-01",
  end_date: "2023-02-14",
  hourly: "temperature_2m",
}

const PARAMS: TCityParams = {
  Tokyo: {
    latitude: 35.69,
    longitude: 139.69,
    ...commonParams,
  },
  Paris: {
    latitude: 48.85,
    longitude: 2.35,
    ...commonParams,
  },
  NewYork: {
    latitude: 40.71,
    longitude: -74.01,
    ...commonParams,
  },
}

const fetchCityWeathers = async (): Promise<TCityResponse> => {
  const tokyoRes: AxiosResponse<TResponse> = await axios.get(URL, {
    params: PARAMS.Tokyo,
  })
  const parisRes: AxiosResponse<TResponse> = await axios.get(URL, {
    params: PARAMS.Paris,
  })
  const newYorkRes: AxiosResponse<TResponse> = await axios.get(URL, {
    params: PARAMS.NewYork,
  })
  return {
    Tokyo: tokyoRes.data,
    Paris: parisRes.data,
    NewYork: newYorkRes.data,
  }
}

export { fetchCityWeathers, type TResponse }
