import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import FavouritePage from "./pages/FavouritePage";
import CountryCard from "./components/countries/CountryCard";
import CountryList from "./components/countries/CountryList";
import { Country } from "./components/types/type";

function App() {
  const [favourites, setFavourites] = useState<Country[]>([]);

  const handleFavourite = (country: Country) => {
    if (!favourites.includes(country)) {
      setFavourites([...favourites, country]);
    } else {
      setFavourites(favourites.filter((item) => item !== country));
    }
  };
  return (
    <div className="App">
      <NavBar favourites={favourites} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/countries" element={<CountryPage />}>
          <Route
            index
            element={
              <CountryList
                favourites={favourites}
                handleFavourite={handleFavourite}
              />
            }
          />
          <Route path=":name" element={<CountryCard />} />
        </Route>
        <Route
          path="/favourites"
          element={
            <FavouritePage
              favourites={favourites}
              handleFavourite={handleFavourite}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
