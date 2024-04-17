import React, { useContext, useState } from "react";

import SearchResults from "../SearchResults/SearchResults";

import ThemeContext from "../../context/ThemeContext";

import { searchSymbol } from "../../utils/api/stock-api";

import { SearchIcon } from "@heroicons/react/solid";

export default function Search() {
  const { darkMode } = useContext(ThemeContext)
  const [input, setInput] = useState("")
  const [bestMatches, setBestMatches] = useState([])

  const updateBestMatches = async () => {
    const searchResults = await searchSymbol(input)
    const result = searchResults.result

    if (result) {
      setBestMatches(result.splice(0, 10));
    } else {
      setBestMatches([])
    }
  }

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      <button onClick={updateBestMatches}>
        <SearchIcon className="h-6 w-6 m-2 fill-neutral-500" />
      </button>
      {bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}
    </div>
  )
}
