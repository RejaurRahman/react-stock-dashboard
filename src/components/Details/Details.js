import React from "react";

import { companyDetails } from "../../constants/mock"

import Card from "../Card/Card";

export default function Details() {
  const detailsList = {
    Exchange: "Exchange",
    Country: "Country",
    Sector: "Sector",
    MarketCapitalization: "Market Capitalization",
    DividendYield: "Dividend Yield",
    PERatio: "PE Ratio",
    EPS: "EPS"
  }

  const convertToBillion = (number) => {
    return (number / 1000000000).toFixed(2)
  }

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => {
          return (
            <li className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                {item === "MarketCapitalization"
                  ? `${convertToBillion(companyDetails[item])}B`
                  : companyDetails[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  )
}
