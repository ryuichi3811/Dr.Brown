import { NextPage } from "next";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart: NextPage = () => {
  const data = {
    labels: ["1月", "2月", "3月", "4月"],
    datasets: [
      {
        borderColor: "rgba(35,200,153,1)",
        data: [100, 120, 50, 110],
        lineTension: 0,
      },
    ],
  };
  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
