import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";


function Index() {
  ChartJS.register(
    CategoryScale,
    LineElement,
    PointElement,
    Legend,
    Title,
    LinearScale,
    Tooltip
  );

  const labels = ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 9
          }
        }
      },
      title: {
        display: false,
        text: 'Sales statistics'
      }
    },
    scales: {

    },
    layout: {
      padding: 1,
    },

  };
  const datasets = {
    labels,
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: 'white',
        borderColor: "white",
      },
      {
        label: '',
        data: [],
        backgroundColor: 'white',
        borderColor: 'white'
      },
      {
        label: '',
        data: [],
        backgroundColor: 'white',
        borderColor: 'white',
      }
    ]
  };
  
  return (
    <Line
      options={options}
      data={datasets}
    />
  );
}

export default Index