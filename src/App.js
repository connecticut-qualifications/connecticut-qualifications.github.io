import BarChart from "BarChart";
import MapView from "MapView";
import React from "react";
import MapChart from "MapChart";

import { Link } from "react-router-dom";
// import LinkButton from "components/LinkButton";

import VoterEligibilitySurvey from "VoterEligibilitySurvey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>US World Map</h1>
      <MapChart />
      <select>
        <option value="1765">1765</option>
        <option value="1870">1870</option>
      </select>

      {/* Create a button that has a navlink that goes to the VoterEligibilitySurvey page */}
      <button>Go to Voter Eligibility Survey</button>
      {/* <LinkButton to="/path/to/page">Push My Buttons!</LinkButton> */}

      <VoterEligibilitySurvey />
      {/* <MapView /> */}
      {/* <BarChart /> */}
    </div>
  );
}

export default App;
