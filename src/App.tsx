import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";

import { Country } from "./components/types/type";
import HomePage from "./pages/HomePage";
import { Favorite } from "@mui/icons-material";
import CountryPage from "./pages/CountryPage";
import FavouritePage from "./pages/FavouritePage";
import CountryList from "./components/countries/CountryList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/countries" element={<CountryPage />}></Route>
        <Route path="/favourites" element={<FavouritePage />}></Route>
      </Routes>
      <CountryList />
    </div>
  );
}

export default App;
