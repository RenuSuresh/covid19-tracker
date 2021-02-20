import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",

    multiplier: 300,
  },
  recovered: {
    hex: "#7dd71d",

    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",

    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => b.cases - a.cases);
  console.log("sorted data>>", sortedData);
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
// draw circle on maps
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
    >
      <Popup>
        <div className="info-container">
          <div
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            className="info-flag"
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.cases).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
