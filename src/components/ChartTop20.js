import ChartEntry from "./ChartEntry";

const ChartTop20 = ({ Top20Chart }) => {

  const chartEntries = Top20Chart.map((entry, index) => {
    return <ChartEntry entry={entry} key={index} Top20Chart={Top20Chart} />;
  });

  return (<ul>{chartEntries}</ul>)
};

export default ChartTop20;
