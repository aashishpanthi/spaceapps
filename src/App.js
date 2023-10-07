import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import data from "./data/data.json";
import Data from "./pages/Data";

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
      const category = item.category.toLowerCase();

      const allWordsInQueryContained =
        wordsInQuery.every((word) => title.includes(word)) ||
        wordsInQuery.every((word) => description.includes(word)) ||
        wordsInQuery.every((word) => tags.includes(word)) ||
        wordsInQuery.every((word) => category.includes(word));

      return allWordsInQueryContained;
    });

    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Navbar query={query} handleChange={handleChange} />

      <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-2 pb-3">
        <Routes>
          <Route path="/" element={<Home data={filteredData} />} />
          <Route path="/data/:id" element={<Data />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
