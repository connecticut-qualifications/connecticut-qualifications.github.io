import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const MapChart = () => {
  const d3Container = useRef(null);

  // Use the useEffect hook to create the D3 visualization
  useEffect(() => {
    if (d3Container.current) {
      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

      svg
        .append("circle")
        .attr("cx", 250)
        .attr("cy", 250)
        .attr("r", 100)
        .attr("fill", "blue");
    }
  }, []);

  return <div ref={d3Container} />;
};

export default MapChart;
