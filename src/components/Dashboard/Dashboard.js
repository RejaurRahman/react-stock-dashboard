import React, { useContext, useEffect, useState } from "react";

import ThemeContext from "../../context/ThemeContext";

import Overview from "../Overview/Overview";
import Details from "../Details/Details";
import Chart from "../Chart/Chart";
import Header from "../Header/Header";

import StockContext from "../../context/StockContext";

import { fetchStockDetails, fetchQuote } from "../../utils/api/stock-api";

export default function Dashboard() {
  const { darkMode } = useContext(ThemeContext)
  const { stockSymbol } = useContext(StockContext)

  const [stockDetails, setStockDetails] = useState({})
  const [quote, setQuote] = useState({})

  useEffect(() => {
    const updateStockDetails = async () => {
      const result = await fetchStockDetails(stockSymbol)

      setStockDetails(result)
    }

    const updateStockOverview = async () => {
      const result = await fetchQuote(stockSymbol)

      if (result) {
        setQuote(result)
      } else {
        setQuote({})
      }
    }

    updateStockDetails()
    updateStockOverview()
  }, [stockSymbol])

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-2 p-8 font-raleway ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
      </div>
      <div className="md:col-span-2 row-span-4 p-2">
        <Chart />
      </div>
      <div className="p-2">
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3 p-2">
        <Details details={stockDetails} />
      </div>
    </div>
  )
}
