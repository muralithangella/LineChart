import "./styles.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function App() {
  const data = {
    labels: [
      "Monday",
      "TuesDay",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Values ",
        data: [10000, 20000, 40000, 2000, 30000, 50000, 80000],
        backgroundcolor: "blue",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  };
  return (
    <div className="App">
      <h1>Line Chart</h1>
      <Line options={options} data={data} />
    </div>
  );
}
