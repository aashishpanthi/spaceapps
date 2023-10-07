import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import data from "./data/data.json";

function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (value) => {
    setQuery(value);

    const newFilteredData = data.filter((item) => {
      const query = value.toLowerCase();
      const wordsInQuery = query.split(" ");

      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const tags = item.tags.join(" ").toLowerCase();

      const allWordsInQueryContained =
        wordsInQuery.every((word) => title.includes(word)) ||
        wordsInQuery.every((word) => description.includes(word)) ||
        wordsInQuery.every((word) => tags.includes(word));

      return allWordsInQueryContained;
    });

    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Navbar query={query} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<Home data={filteredData} />} />
      </Routes>
    </>
  );
}

export default App;
