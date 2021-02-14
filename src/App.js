import "./App.css";
import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  console.log(countries);
  return (
    <div className="app">
      <div className="app__header">
        <h1> COVID 19 TRACKER 🚀</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* header */}
      {/* title+ select inputu dropdown field */}

      {/* info box */}
      {/* info box */}
      {/* info box */}

      {/* table */}
      {/* graph */}

      {/* Map */}
    </div>
  );
}

export default App;
