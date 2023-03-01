import React, { Component } from "react";
import * as d3 from "d3";
// import statescsv from "./model/stateslived.csv";
// import usstatesjson from "./model/us-states.json";

class MapView extends Component {
  componentDidMount() {
    this.loadMapData();
  }

  loadMapData = async () => {
    // Load in my states data!
    const dataset = await d3.csv("./model/stateslived.csv");
    const data = dataset;
    this.updateChart(data);
  };

  updateChart = (data) => {
    const yearFilter = document.getElementById("year").value;
    const width = 960;
    const height = 500;

    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale([1000]);

    const pathGenerator = d3.geoPath().projection(projection);

    const colorScale = d3
      .scaleLinear()
      .range(["rgb(213,222,217)", "rgb(69,173,168)"])
      .domain([0, 1]);

    const svg = d3.select("#map");

    svg.selectAll("path").remove();
    d3.select(".legend").remove();

    const geoJSONFilePath = "./model/us-states.json";

    d3.json(geoJSONFilePath).then(function (geoJSON) {
      for (let i = 0; i < data.length; i++) {
        const dataState = data[i].state;
        const dataValue = data[i].year_admitted;
        for (let j = 0; j < geoJSON.features.length; j++) {
          const jsonState = geoJSON.features[j].properties.name;

          if (dataState === jsonState) {
            geoJSON.features[j].properties.year_admitted = dataValue;
            break;
          }
        }
      }

      svg
        .selectAll("path")
        .data(geoJSON.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator)
        .style("stroke", "#fff")
        .style("stroke-width", "1")
        .style("fill", function (d) {
          const value = d.properties.year_admitted > yearFilter ? 0 : 1;

          if (value) {
            return colorScale(value);
          } else {
            return "rgb(213,222,217)";
          }
        });

      const legend = d3
        .select("#map")
        .append("svg")
        .attr("class", "legend")
        .attr("width", 140)
        .attr("height", 200)
        .selectAll("g")
        .data(colorScale.range().reverse())
        .enter()
        .append("g")
        .attr("transform", function (d, i) {
          return "translate(0," + i * 20 + ")";
        });

      legend
        .append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function (d) {
          return d;
        });

      legend
        .append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function (d, i) {
          if (i == 0) {
            return "States joined";
          } else {
            return "Unclaimed";
          }
        });
    });
  };

  render() {
    return (
      <div>
        <div id="filter">
          <select name="year" id="year" onChange="onCategoryChanged()">
            <option value="1765">1765</option>
            <option value="1800">1800</option>
            <option value="1850">1850</option>
            <option value="1870" selected>
              1870
            </option>
            <option value="1900">1900</option>
            <option value="1950">1950</option>
            <option value="2000">2000</option>
          </select>
        </div>
        <h2>1870 US Map</h2>
        <svg id="map" width="960" height="500"></svg>
      </div>
    );
  }
}

export default MapView;
