import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import AddNewPage from "./components/AddNewPage";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="homePage" element={<HomePage />} />
            <Route path="searchPage" element={<SearchPage />} />
            <Route path="addNewPage" element={<AddNewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
