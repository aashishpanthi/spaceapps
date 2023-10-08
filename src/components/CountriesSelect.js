import React from "react";
import { countryData as countries } from "../data/Countries";

function CountriesSelect({ country, setCountry }) {
  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a country
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        {countries.map((country) => (
          <option
            key={country.Country_Name}
            value={
              JSON.parse(localStorage.getItem("country"))?.name ||
              country.Country_Name
            }
            onClick={() => {
              localStorage.setItem(
                "country",
                JSON.stringify({ name: country.Country_Name })
              );
            }}
          >
            {country.Country_Name}
          </option>
        ))}
      </select>
    </>
  );
}

export default CountriesSelect;
