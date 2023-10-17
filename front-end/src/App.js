import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="homePage" element={<HomePage />} />
            <Route path="searchPage" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
