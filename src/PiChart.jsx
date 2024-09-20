import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Define the data for the pie chart
  const data = {
    labels: ["Journal", "Conference", "Book", "Article"],
    datasets: [
      {
        data: [5, 6, 23, 75], // Percentage values for each label
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Color for Journal
          "rgba(255, 99, 132, 0.6)", // Color for Conference
          "rgba(54, 162, 235, 0.6)", // Color for Book
          "rgba(255, 206, 86, 0.6)", // Color for Article
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-3/4 h-3/4 md:w-1/2 md:h-1/2'>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
