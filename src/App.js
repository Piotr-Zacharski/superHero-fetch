import React, { useState } from "react";
import useFetch from "./useFetch";
import "./App.css";
import SuperHeroCard from "./components/SuperHeroCard";

const ACCESS_TOKEN = "4170129049779298";

function App() {
  const [heroId, setHeroId] = useState(Math.floor(Math.random() * 500) + 1);

  const { data, isLoading, error } = useFetch(
    `https://superheroapi.com/api/${ACCESS_TOKEN}/${heroId}`
  );

  const handleInputChange = event => {
    setHeroId(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data.id);

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
