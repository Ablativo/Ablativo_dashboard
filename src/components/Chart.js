import React, { useState } from "react";
import { Line } from "react-chartjs-2";

// For testing
const labelsVals = [
  "03-08",
  "04-08",
  "05-08",
  "06-08",
  "07-08",
  "08-08",
  "09-08",
];
const dataVals = [10, 15, 12, 14, 20, 8, 18];

export default function Chart() {
  const [chartData, setChartData] = useState();

  const chart = () => {
    setChartData({
      labels: labelsVals,
      datasets: [
        {
          label: "# visitors",
          data: dataVals,
          backgroundColor: "rgba(10, 46, 100, 0.2)",
          borderColor: "rgba(10, 46, 100, 1)",
        },
      ],
      borderWidth: 2,
    });
  };

  React.useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontSize: 15,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 15,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 18,
            },
          },
        }}
      />
    </div>
  );
}
