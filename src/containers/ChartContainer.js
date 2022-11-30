import React, { useState, useEffect } from "react";
import ChartTop20 from "../components/ChartTop20";

const ChartContainer = () => {
  const [Top20Chart, setTop20Chart] = useState([]);

  useEffect(() => {
    getChart();
  }, []);

  const getChart = function(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(Top20Chart => setTop20Chart(Top20Chart.feed.entry));
      console.log(Top20Chart)
  }

  return (
    <div className="main-container">
      <ChartTop20 Top20Chart={Top20Chart} />
    </div>
  );
};

export default ChartContainer;
