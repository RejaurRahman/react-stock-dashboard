import React, { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

import { intradayData } from "../../constants/mock";

import Button from "../Button/Button";
import Card from "../Card/Card";

import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";

export default function Chart() {
  const chartFilters = ["1D", "1W", "1M", "1Y"]

  const [filter, setFilter] = useState("1D")

  const randomData = () => {
    let data = []
    let current = 1000

    for (let i = 0; i < 100; i++) {
      current += Math.random() * 100 - 50
      data.push({ time: "11:00 am", value: current })
    }

    return data
  }

  const formatData = () => {
    let data = []

    Object.entries(intradayData["Time Series (5min)"]).forEach((item) => {
      data.push({ time: item[0], value: item[1]["4. close"] })
    })

    console.log(data)

    return data
  }

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {chartFilters.map((item) => (
          <li>
            <Button
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item)
              }}
            />
          </li>
        ))}
      </ul>

      <ResponsiveContainer>
        <AreaChart data={formatData()}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(199 210 254)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="rgb(199 210 254)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={1}
          />
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}