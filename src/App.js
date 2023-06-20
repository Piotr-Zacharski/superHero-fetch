import React, { useState } from "react";
import useFetch from "./useFetch";
import "./App.css";
import SuperHeroCard from "./components/SuperHeroCard";
import { ACCESS_TOKEN } from "./utils/constants";

function App() {
  const [heroId, setHeroId] = useState(Math.floor(Math.random() * 500) + 1);
  const apiUrl = `https://superheroapi.com/api/${ACCESS_TOKEN}/${heroId}`;
  const { data, isLoading, error } = useFetch(apiUrl);

  const handleInputChange = event => {
    setHeroId(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: "Super Brigade", fontSize: 48 }}>SuperHeroes</h1>
      <label style={{ display: "grid" }}>Type a number (1-731):</label>
      <input
        style={{ margin: 10, padding: 10, fontSize: 16, borderRadius: 5 }}
        name="heroId"
        value={heroId}
        onChange={handleInputChange}
      />
      {data.image && data.name && (
        <SuperHeroCard image={data.image.url} name={data.name} />
      )}
    </div>
  );
}

export default App;
