import React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js"
import "chartjs-adapter-date-fns"

ChartJS.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
import { TResponse } from "../weatherApi/fetchWeather"

type TProps = {
  tokyoWeather: TResponse
  parisWeather: TResponse
  newYorkWeather: TResponse
}

const TemperatureLine = (props: TProps) => {
  const { tokyoWeather, parisWeather, newYorkWeather } = props
  const labels = tokyoWeather.hourly.time
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "Tokyo",
        data: tokyoWeather.hourly.temperature_2m,
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Paris",
        data: parisWeather.hourly.temperature_2m,
        borderColor: "rgb(75, 100, 192)",
      },
      {
        label: "NewYork",
        data: newYorkWeather.hourly.temperature_2m,
        borderColor: "rgb(0, 0, 0)",
      },
    ],
  }

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time" as const,
        time: {
          unit: "day",
        },
      },
    },
  }

  return (
    <>
      <Line height={300} width={300} data={graphData} options={options} />
    </>
  )
}

export default TemperatureLine
