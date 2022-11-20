import "./Chart.css";

const ChartBar = ({ value, maxValue, label }) => {
  const barFill =
    maxValue > 0 ? Math.round((value / maxValue) * 100) + "%" : "0%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMax}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
