import React, { useState, useEffect } from "react";
import "./index.css";
import { FootballYearData } from "../football-year-data/index";
const classNames = require("classnames");

export const FootballMatchesData = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearData, setYearData] = useState({});
  let years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

  useEffect(() => {
    if (selectedYear) {
      fetch(
        `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`
      )
        .then((response) => response.json())
        .then((data) => {
          setYearData(data);
          console.log(data);
        });
    }
  }, [selectedYear]);

  return (
    <div className="layout-row">
      <div className="section-title">Select Year</div>
      <ul className="sidebar" data-testid="year-list">
        {years.map((year, i) => {
          return (
            <li
              className={classNames({
                "sidebar-item": true,
                active: selectedYear === year,
              })}
              onClick={() => setSelectedYear(year)}
              key={year}
            >
              <a>{year}</a>
            </li>
          );
        })}
      </ul>
      {selectedYear ? <FootballYearData data={yearData} /> : <div></div>}
    </div>
  );
};
