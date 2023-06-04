import React, { useEffect, useState } from "react";
import { Country } from "../types/type";

type CountryDetailProps = {
  name: string;
};

function CountryDetail({ name }: CountryDetailProps) {
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (name) {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => response.json())
        .then((data) => setCountry(data[0]))
        .catch((error) => console.log(error));
    }
  }, [name]);

  return country ? (
    <div>
      <img src={country.flags.png} alt={country.name.common} />
      <h1>{country.name.common}</h1>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <ul>
        {country.languages
          ? Object.values(country.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))
          : ""}
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CountryDetail;
