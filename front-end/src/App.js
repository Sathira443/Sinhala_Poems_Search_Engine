import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import AddNewPage from "./components/AddNewPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="searchPage" element={<SearchPage />} />
            <Route path="addNewPage" element={<AddNewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
