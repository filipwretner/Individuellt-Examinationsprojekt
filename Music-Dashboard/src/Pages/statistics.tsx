import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import songsData from '../../public/statistics.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ShowStatistics: React.FC = () => {
  const statistics = songsData.statistics;

  const data = {
    labels: Object.keys(statistics),
    datasets: [
      {
        label: 'Antal lyssningar',
        data: Object.values(statistics),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Populäraste låtarna just nu',
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Statistik</h2>
      <div className ="bg-white shadow-md rounded-lg p-6">
      <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ShowStatistics;