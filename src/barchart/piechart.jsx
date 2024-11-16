
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";



ChartJS.register(ArcElement, Tooltip, Legend, Title);

export function Piechart() {
  const [chart, setChart] = useState({
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        data: [250, 150, 180, 200, 120],
        backgroundColor: ["blue", "pink", "orange", "brown", "green"],
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Users Gained Between 2016-2020",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="container-fluid" style={{ width: "60%", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <div style={{ position: "relative", height: "400px" }}>
        <Pie data={chart} options={options} />
      </div>
    </div>
  );
}
