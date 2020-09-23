import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

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
          label: "# users",
          data: dataVals,
          backgroundColor: [
            "rgb(255, 0, 0, 0.3)",
            "rgb(255, 127, 0, 0.3)",
            "rgb(255, 255, 0, 0.3)",
            "rgb(0, 255, 0, 0.3)",
            "rgb(0, 0, 255, 0.3)",
            "rgb(46, 43, 95, 0.3)",
            "rgb(139, 0, 255, 0.3)",
          ],
          borderColor: [
            "rgb(255, 0, 0, 1)",
            "rgb(255, 127, 0, 1)",
            "rgb(255, 255, 0, 1)",
            "rgb(0, 255, 0, 1)",
            "rgb(0, 0, 255, 1)",
            "rgb(46, 43, 95, 1)",
            "rgb(139, 0, 255, 1)",
          ],
        },
      ],
      borderWidth: 10,
    });
  };

  React.useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Bar
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
