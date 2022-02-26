import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./styles.css";
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <>
      <div className="main-container">
        <input
          type="text"
          className="search"
          placeholder="search place, city .."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onkeypress={search}
        />
      </div>
    </>
  );
};

export default App;
