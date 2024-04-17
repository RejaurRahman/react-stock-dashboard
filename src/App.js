import React, { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard/Dashboard";

import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [stockSymbol, setStockSymbol] = useState("FB")

  useEffect(() => {
    console.log(stockSymbol)
  })

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  )
}
